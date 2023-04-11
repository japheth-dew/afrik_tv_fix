import { useContext } from 'react';
import NotificationContext from '../provider/NotificationProvider';

const useNotification = () => useContext(NotificationContext);

export default useNotification;