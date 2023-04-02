import { createContext, useState } from "react";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import cn from "clsx";

export const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  dismissNotification: (id) => {},
});

const Notification = ({ notification, dismissNotification }) => {
  const { id, type, message } = notification;

  const classes = cn(
    "fixed top-4 right-4 p-4 rounded-md shadow-md z-50",
    "flex items-center space-x-4",
    "max-w-[calc(100%-2rem)] w-full sm:max-w-sm",
    "transition duration-300 ease-in-out transform",
    "hover:scale-105 hover:shadow-lg",
    {
      "bg-green-500 text-white": type === "success",
      "bg-red-500 text-white": type === "error",
    }
  );

  return (
    <div
      className={classes}
    >
      <div className="flex-1">
        <p className="font-semibold">{message}</p>
      </div>
      <HighlightOffTwoToneIcon onClick={() => dismissNotification(id)} className="cursor-pointer" />
    </div>
  );
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    notification.id = Math.random().toString(36).slice(2, 9);
    setNotifications((notifications) => [...notifications, notification]);
  };

  const dismissNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, dismissNotification }}
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          dismissNotification={dismissNotification}
        />
      ))}
      {children}
    </NotificationContext.Provider>
  );
}