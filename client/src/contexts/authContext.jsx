import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH, tokenName } from '../core/environments/constants';
import * as authService from '../core/services/authService';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem(tokenName, result.accessToken);

        navigate(PATH.home);
    };

    const registerSubmitHandler = async ({
        email,
        username,
        avatar,
        bornDate,
        gender,
        password,
    }) => {
        const result = await authService.register({
            email,
            username,
            avatar,
            bornDate,
            gender,
            password,
        });

        setAuth(result);

        localStorage.setItem(tokenName, result.accessToken);

        navigate(PATH.home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem(tokenName);

        navigate(PATH.home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth._id,
        email: auth.email,
        username: auth.username,
        avatar: auth.avatar,
        bornDate: auth.bornDate,
        gender: auth.gender,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
