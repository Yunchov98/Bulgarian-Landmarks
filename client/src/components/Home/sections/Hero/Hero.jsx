import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles['hero']}>
            <article>
                <h2 className={styles['heading']}>Explore Bulgaria</h2>
                <p>Here you can find some lanmarks in Bulgaria</p>
                <p>
                    Bulgaria is a little country in Europe with beautiful nature
                </p>
            </article>

            <section className={styles['img-wrapper']}>
                <ul>
                    <li>
                        <img src="images/R.jpg" alt="img" />
                        <p>Alexander Nevski</p>
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
    );
}
