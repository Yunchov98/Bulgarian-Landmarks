import { Link } from 'react-router-dom';

import toTheTop from '../../utils/toTheTop';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles['site-header']}>
            <Link onClick={() => toTheTop('instant')} to={'/'} className={styles['site-name']}>
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
                <ul>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
