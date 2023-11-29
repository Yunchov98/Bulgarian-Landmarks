import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PATH } from '../../core/environments/constants';
import styles from './Header.module.css';
import toTheTop from '../../utils/toTheTop';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const { isAuthenticated, username, logoutHandler, avatar } =
        useContext(AuthContext);

    return (
        <header className={styles['site-header']}>
            <h2 className={styles['site-name']}>
                <Link onClick={() => toTheTop('instant')} to={PATH.home}>
                    Bulgarian Landmarks
                </Link>
            </h2>
            <form className={styles['search-form']}>
                <input
                    className={styles['search-bar']}
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search..."
                />
                <button className={styles['search-button']}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <nav className={styles['main-nav']}>
                <ul className={styles['main-ul']}>
                    {isAuthenticated ? (
                        <div className={styles['user']}>
                            <li className={styles['main-ul-li']}>
                                <div className={styles['menu']}>
                                    <i className="fa-solid fa-arrows-to-circle"></i>
                                </div>
                                <ul className={styles['inner-nav']}>
                                    <li className={styles['inner-nav-li']}>
                                        <Link
                                            className={styles['catalog']}
                                            to={PATH.catalog}
                                        >
                                            <i className="fa-solid fa-landmark-dome"></i>{' '}
                                            Catalog
                                        </Link>
                                    </li>
                                    <li className={styles['inner-nav-li']}>
                                        <Link to={'#'}>
                                            <i className="fa-solid fa-address-card"></i>{' '}
                                            About us
                                        </Link>
                                    </li>
                                    <li className={styles['inner-nav-li']}>
                                        <Link to={PATH.createPost}>
                                            <i className="fa-solid fa-pen"></i>{' '}
                                            Create Post
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles['main-ul-li']}>
                                <img src={avatar || '/images/default-profile-pic.png'} alt="profile-picture" />
                                <ul className={styles['inner-nav']}>
                                    <li className={styles['user-info']}>
                                        <Link to={'#'}>
                                            <img
                                                src={avatar || '/images/default-profile-pic.png'}
                                                alt="profile-picture"
                                            />
                                            <p>{username ? username : ''}</p>
                                        </Link>
                                        <div
                                            onClick={logoutHandler}
                                            className={styles['logout']}
                                        >
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            <p>
                                                <Link to={PATH.logout}>
                                                    Logout
                                                </Link>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    ) : (
                        <div className={styles['guest']}>
                            <li>
                                <Link to={PATH.login}>Log In</Link>
                            </li>
                            <li>
                                <Link to={PATH.register}>Register</Link>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
}
