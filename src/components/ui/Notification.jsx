import { useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import useNotification from '../../hooks/useNotification';

const Notification = () => {
    const { notifications, removeNotification } = useNotification();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (notifications.length > 0) {
                removeNotification(notifications[0]);
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [notifications, removeNotification]);

    return (
        <>
            {notifications.map((notification) => (
                <Snackbar open={open} autoHideDuration={4000}>
                    <Alert
                        key={notification.message}
                        severity={notification.severity}
                        onClose={() => removeNotification(notification)}
                    >
                        {notification.message}
                    </Alert>
                </Snackbar>
            ))}
        </>
    );
};

export default Notification;