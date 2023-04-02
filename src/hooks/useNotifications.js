import { useContext } from "react";
import { NotificationContext } from "../providers/Notifications";

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  const { addNotification, dismissNotification } = context;
  return { addNotification, dismissNotification };
}