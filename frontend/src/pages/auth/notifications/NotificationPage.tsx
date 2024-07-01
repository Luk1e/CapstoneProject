import styled from "styled-components";
import { Loader } from "../../../components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { useSelector, useDispatch } from "react-redux";
import { StateType, DispatchType } from "../../../store/store";
import {
  getNotifications,
  reset,
} from "../../../toolkit/notification/notificationSlice";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  width: 90%;
  display: flex;
  padding: 100px 0;
  max-width: 1400px;
  flex-direction: column;

  ${respondTo.mobile`
    padding: 50px 0;
  `};

  ${respondTo.tablet`
    width: 80%;
  `};

  ${respondTo.laptop`
    width: 80%;
  `};

  ${respondTo.desktop`
    width: 70%;
  `};

  ${respondTo.tv`
    width: 60%;
  `};
`;

const Label = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Text = styled.p`
  font-weight: 500;
  font-style: italic;
  color: var(--black);
  font-size: var(--small-l);

  &:not(:first-of-type) {
    margin-left: auto;
  }
`;

const ErrorText = styled.div`
  margin: 20px 10px;
  font-style: italic;
  color: var(--primary);
  font-size: var(--small-m);
`;

function NotificationPage() {
  const { t } = useTranslation(["auth"]);
  const dispatch: DispatchType = useDispatch();
  const { isLoading, notificationList, error } = useSelector(
    (state: StateType) => state.notifications
  );

  useEffect(() => {
    dispatch(getNotifications());
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <Container>
      <Label className="w3-animate-left">
        <Text>{t("notificationPage.Notifications")}</Text>
        <Text>{t("notificationPage.Time")}</Text>
      </Label>

      {isLoading && <Loader color="darkmagenta" />}

      {!isLoading &&
        (error || (notificationList && notificationList?.length == 0)) && (
          <ErrorText className="w3-animate-left">
            {t("notificationPage.There are no notifications")}
          </ErrorText>
        )}

      {!isLoading &&
        notificationList &&
        notificationList.length > 0 &&
        notificationList.map((notificationGroup) => (
          <div className="w3-animate-left">
            <Label>
              <Text>{notificationGroup.date}</Text>
            </Label>
            {notificationGroup.notifications.map((notification) => (
              <Notification
                key={notification.notificationId}
                notification={notification}
              />
            ))}
          </div>
        ))}
    </Container>
  );
}

export default NotificationPage;
