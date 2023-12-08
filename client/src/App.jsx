import { Route, Routes } from 'react-router-dom';

import './App.css';
import { PATH } from './core/environments/constants';
import { AuthProvider } from './contexts/authContext';
import AuthGuard from './guards/AuthGuard';
import LoggedInGuard from './guards/LoggedInGuard';
import ErrorBoundary from './guards/ErrorBoundary/ErrorBoundary';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Catalog from './components/Catalog/Catalog';
import CreatePost from './components/CreatePost/CreatePost';
import ToTheTopButton from './components/ToTheTopButton/ToTheTopButton';
import EditPost from './components/EditPost/EditPost';
import Success from './components/Success/Success';
import UserProfile from './components/UserProfile/UserProfile';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <>
                    <Header />

                    <main className="site-content">
                        <Routes>
                            <Route path={PATH.home} element={<Home />} />
                            <Route path={PATH.catalog} element={<Catalog />} />
                            <Route
                                path={PATH.profile}
                                element={<UserProfile />}
                            />
                            <Route path={PATH.search} element={<Search />} />
                            <Route
                                path={PATH.notFound}
                                element={<NotFound />}
                            />

                            <Route element={<AuthGuard />}>
                                <Route
                                    path={PATH.success}
                                    element={<Success />}
                                />
                                <Route
                                    path={PATH.createPost}
                                    element={<CreatePost />}
                                />
                                <Route
                                    path={PATH.edit}
                                    element={<EditPost />}
                                />
                                <Route
                                    path={PATH.logout}
                                    element={<Logout />}
                                />
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
        </ErrorBoundary>
    );
}

export default App;
