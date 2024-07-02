package com.kiu.capstoneproject.service;

import com.kiu.capstoneproject.dto.notification.LatestNotificationDTO;
import com.kiu.capstoneproject.dto.notification.NotificationDTO;
import com.kiu.capstoneproject.dto.notification.NotificationGroupedByDateDTO;
import com.kiu.capstoneproject.dto.notification.ReadNotificationDTO;
import com.kiu.capstoneproject.enums.NotificationStatus;
import com.kiu.capstoneproject.exception.NotFoundException;
import com.kiu.capstoneproject.model.entity.*;
import com.kiu.capstoneproject.repository.NotificationRepository;
import com.kiu.capstoneproject.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    public List<NotificationGroupedByDateDTO>  getNotifications() {
// get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        // get notifications and group by date
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");
        List<NotificationDTO> notifications = notificationRepository.findByUser(user)
                .stream()
                .map(notification -> NotificationDTO.builder()
                        .notificationId(notification.getNotificationId())
                        .text(notification.getText())
                        .dateTime(notification.getDateTime())
                        .status(notification.getStatus())
                        .build())
                .sorted(Comparator.comparing(NotificationDTO::getDateTime).reversed()) // Sort notifications by dateTime in descending order
                .toList();

        // group notifications by date
        Map<String, List<NotificationDTO>> groupedNotifications = notifications.stream()
                .collect(Collectors.groupingBy(notificationDTO -> notificationDTO.getDateTime().format(formatter)));

        // map to the new DTO
        return groupedNotifications.entrySet().stream()
                .map(entry -> NotificationGroupedByDateDTO.builder()
                        .date(entry.getKey())
                        .notifications(entry.getValue())
                        .build())
                .collect(Collectors.toList());
    }


    public LatestNotificationDTO getLatestNotifications() {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        // get latest 10 notifications
        List<NotificationDTO> latestNotifications = notificationRepository.findFirst10ByUser(user)
                .stream()
                .map(notification -> NotificationDTO
                        .builder()
                        .notificationId(notification.getNotificationId())
                        .text(notification.getText())
                        .dateTime(notification.getDateTime())
                        .status(notification.getStatus())
                        .build()
                )
                .toList();

        Integer numberOfUnreadNotification = notificationRepository.countReadNotificationsByUserId(user.getUserId());

        return LatestNotificationDTO.builder()
                .latestNotifications(latestNotifications)
                .numberOfUnreadNotification(numberOfUnreadNotification)
                .build();
    }


    public void readNotifications() {
        // get user from security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(((UserDetails) authentication.getPrincipal()).getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));

        List<Notification> unreadNotifications  = notificationRepository.findUnreadNotificationsByUserIdBeforeDate(user.getUserId(),  LocalDateTime.now());
        System.out.println(unreadNotifications);
        unreadNotifications.forEach(notification -> notification.setStatus(NotificationStatus.READ));

        notificationRepository.saveAll(unreadNotifications);
    }

    public void addNotifications(User user,String text, LocalDateTime dateTime) {
        notificationRepository.save(Notification
                .builder()
                .user(user)
                .text(text)
                .dateTime(dateTime)
                .status(NotificationStatus.UNREAD)
                .build());
    }
}
