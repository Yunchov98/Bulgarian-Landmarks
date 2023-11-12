import styles from './AboutBulgaria.module.css';

export default function AboutBulgaria() {
    return (
        <section className={styles['about-bulgaria']}>
            <h2 className={styles['section-title']}>About Bulgaria</h2>
            <section className={styles['banner']}>
                <div className={styles['item']}>
                    <div className={styles['fa-icon']}>
                        <i className="fa-solid fa-landmark"></i>
                    </div>
                    <p className={styles['item-text']}>352 natural sights</p>
                </div>

                <div className={styles['item']}>
                    <div className={styles['fa-icon']}>
                        <i className="fa-solid fa-person"></i>
                    </div>
                    <p className={styles['item-text']}>
                        Over 6.5 milion people
                    </p>
                </div>

                <div className={styles['item']}>
                    <div className={styles['fa-icon']}>
                        <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </div>
                    <p className={styles['item-text']}>
                        Area: 111 000 km<sup>2</sup>
                    </p>
                </div>
            </section>
        </section>
    );
}
