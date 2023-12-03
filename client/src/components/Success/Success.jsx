import { Link } from 'react-router-dom';
import { PATH } from '../../core/environments/constants';
import styles from './Success.module.css';

export default function Success() {
    return (
        <section className={styles['success-section']}>
            <div className={styles['wrapper']}>
                <div className={styles['success-media']}>
                    <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className={styles['content']}>
                    <h2 className={styles['section-heading']}>Success</h2>
                    <p className={styles['heading-text']}>
                        Successfully delete a resource.
                    </p>
                </div>
                <Link to={PATH.catalog} className={styles['ok-button']}>
                    OK
                </Link>
            </div>
        </section>
    );
}
