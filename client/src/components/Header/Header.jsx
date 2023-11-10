import styles from './Header.module.css'

export default function Header() {
    return (
            <header className={styles['site-header']}>
            <h2 className={styles['site-name']}>Bulgarian Landmarks</h2>
            <form className={styles['search-form']}>
                <input className={styles['search-bar']} type="search" name="search" id="search" placeholder='Search...' />
                <input className={styles['search-button']} type="button" value="Search" />
            </form>
            <nav className={styles['main-nav']}>
                <ul>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
}