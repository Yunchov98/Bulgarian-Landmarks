import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <section className={styles['wrapper']}>
                <article>
                    <h2 className={styles['heading']}>Explore Bulgaria</h2>
                    <p>Here you can find some lanmarks in Bulgaria</p>
                    <p>
                        Bulgaria is a little country in Europe with beautiful
                        nature
                    </p>
                </article>

                <section className={styles['img-wrapper']}>
                    <ul>
                        <li>
                            <img src="images/R.jpg" alt="img" />
                            <p>Aleksander Nevski</p>
                        </li>
                        <li>
                            <img src="images/Belogradchik.jpg" alt="img" />
                            <p>Belogradchik</p>
                        </li>
                        <li>
                            <img src="images/Shipka.jpg" alt="img" />
                            <p>Shipka</p>
                        </li>
                    </ul>
                </section>
            </section>

            <section className={styles['about-bulgaria']}>
                <h3>About Bulgaria</h3>
                <section className={styles['banner']}>
                    <div className={styles['item']}>
                        <div className={styles['fa-icon']}>
                            <i className="fa-solid fa-landmark"></i>
                        </div>
                        <p className={styles['item-text']}>
                            352 natural sights
                        </p>
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
           
        </>
    );
}
