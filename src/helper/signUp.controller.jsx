import { useContext, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../provider';
import { NotificationContext } from '../provider/NotificationProvider';

import axios from '../provider/api/axios';

const handleSignup = async (fullname, email, password) => {
    const { addNotification } = useContext(NotificationContext)
    const { setAuth } = useAuth();
    const { setErrMsg } = useContext(AppContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    try {
        const res = await axios.post("/login",
            JSON.stringify({ fullname, email, password }),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        console.log(JSON.stringify(res?.data));
        const accessToken = response?.data?.user?.token;
        setAuth({ email, password, accessToken });

        navigate(from, { replace: true });
        addNotification(res?.data?.user?.msg, "success")
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Email already Exist');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }

        addNotification(res?.data?.msg, "error")
        return false;
    }
    return true;
}

export default handleSignup;
