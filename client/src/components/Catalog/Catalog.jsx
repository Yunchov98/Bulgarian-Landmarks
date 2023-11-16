import styles from './Catalog.module.css';

import CatalogItem from './CatalogItem/CatalogItem';

export default function Catalog() {
    return (
        <section className={styles['catalog-section']}>
            <h2 className={styles['catalog-heading']}>Landmarks</h2>
            <div className={styles['content-wrapper']}>
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
            </div>
        </section>
    );
}
