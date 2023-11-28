import { Route, Routes } from 'react-router-dom';

import './App.css';
import { PATH } from './core/environments/constants';

import { AuthProvider } from './contexts/authContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import CreatePost from './components/CreatePost/CreatePost';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import ToTheTopButton from './components/ToTheTopButton/ToTheTopButton';
import AuthGuard from './guards/AuthGuard';
import LoggedInGuard from './guards/LoggedInGuard';
import Logout from './components/Logout/Logout';

function App() {
    return (
        <AuthProvider>
            <>
                <Header />

                <main className="site-content">
                    <Routes>
                        <Route path={PATH.home} element={<Home />} />
                        <Route path={PATH.catalog} element={<Catalog />} />

                        <Route element={<AuthGuard />}>
                            <Route
                                path={PATH.createPost}
                                element={<CreatePost />}
                            />
                            <Route path={PATH.logout} element={<Logout />} />
                        </Route>

                        <Route element={<LoggedInGuard />}>
                            <Route path={PATH.login} element={<Login />} />
                            <Route
                                path={PATH.register}
                                element={<Register />}
                            />
                        </Route>
                    </Routes>

                    <ToTheTopButton />
                </main>

                <Footer />
            </>
        </AuthProvider>
    );
}

export default App;
