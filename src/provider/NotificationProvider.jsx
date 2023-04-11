import React, { createContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message, severity) => {
        const newNotification = { message, severity };
        setNotifications([...notifications, newNotification]);
    };

    const removeNotification = (notificationToRemove) => {
        const newNotifications = notifications.filter(
            (notification) => notification !== notificationToRemove
        );
        setNotifications(newNotifications);
    };

    return (
        <NotificationContext.Provider
            value={{ notifications, addNotification, removeNotification }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;