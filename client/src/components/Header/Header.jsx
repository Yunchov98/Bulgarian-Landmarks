import { Link } from 'react-router-dom';

import toTheTop from '../../utils/toTheTop';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles['site-header']}>
            <Link
                onClick={() => toTheTop('instant')}
                to={'/'}
                className={styles['site-name']}
            >
                <h2>Bulgarian Landmarks</h2>
            </Link>
            <form className={styles['search-form']}>
                <input
                    className={styles['search-bar']}
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search..."
                />
                <input
                    className={styles['search-button']}
                    type="button"
                    value="Search"
                />
            </form>
            <nav className={styles['main-nav']}>
                <ul className={styles['main-ul']}>
                    <li className={styles['main-ul-li']}>
                        <div className={styles['menu']}>
                            <i className="fa-solid fa-arrows-to-circle"></i>
                        </div>
                        <ul className={styles['inner-nav']}>
                            <li className={styles['inner-nav-li']}>
                                <Link
                                    className={styles['catalog']}
                                    to={'/catalog'}
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
                                <Link to={'/create-post'}>
                                    <i className="fa-solid fa-pen"></i> Create
                                    Post
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles['main-ul-li']}>
                        <img
                            src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                        />
                        <ul className={styles['inner-nav']}>
                            <li className={styles['user-info']}>
                                <Link to={'/catalog'}>
                                    <img
                                        src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                                        alt=""
                                    />
                                    <p>User Name</p>
                                </Link>
                                <div className={styles['logout']}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <p>Logout</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
