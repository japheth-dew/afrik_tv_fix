import { useContext } from "react";

import UserContext from "./UserProvider";
import { useNavigate } from "react-router-dom";

const TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

const Protected = ({ children }) => {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        // Start the session timeout timer
        const timeout = setTimeout(() => {
            // Log the user out and redirect to the login page
            navigate('/auth/signin', { replace: true });
        }, TIMEOUT);

        // Save the timer ID so we can clear it later
        setTimer(timeout);

        // Reset the timer when the user interacts with the app
        function resetTimer() {
            clearTimeout(timer);
            setTimer(setTimeout(() => {
                // Log the user out and redirect to the login page
                navigate('/auth/signin', { replace: true });
            }, TIMEOUT));
        }

        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('keypress', resetTimer);

        return () => {
            // Clean up the event listeners and timer
            document.removeEventListener('mousemove', resetTimer);
            document.removeEventListener('keypress', resetTimer);
            clearTimeout(timer);
        };
    }, []);


    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (!user) navigate('/auth/signin', { replace: true })

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}