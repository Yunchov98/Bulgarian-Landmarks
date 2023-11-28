import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthContext from '../contexts/authContext';
import { PATH } from '../core/environments/constants';

export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={PATH.login} />;
    }

    return <Outlet />;
}
