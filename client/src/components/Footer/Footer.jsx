import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles['site-footer']}>
            <p>All rights reserved &copy;</p>
            <p>Created by Georgi Yunchov</p>
        </footer>
    );
}
