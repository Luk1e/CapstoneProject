import styled from "styled-components";
import { NotificationType } from "../../../../toolkit/notification/notificationSlice";
import parseBoldText from "../../../../utils/helpers/parseBoldText";
const Container = styled.div`
  display: flex;
  align-items: center;

  color: var(--black);
`;

const TextLeft = styled.h4`
  margin: 0;
  font-size: var(--small-m);
`;

const TextRight = styled.h4`
  display: flex;
  margin: 0;
  margin-left: auto;
  font-size: var(--small-m);
`;

interface NotificationProps {
  key: number;
  notification: NotificationType;
}

function Notification({ notification }: NotificationProps) {
  const { text, dateTime } = notification;
  return (
    <Container>
      <TextLeft>{parseBoldText(text)}</TextLeft>
      <TextRight>{dateTime.slice(-8, -3)}</TextRight>
    </Container>
  );
}

export default Notification;
