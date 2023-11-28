import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATH } from '../core/environments/constants';
import AuthContext from '../contexts/authContext';

export default function LoggedInGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to={PATH.home} />;
    }

    return <Outlet />;
}
