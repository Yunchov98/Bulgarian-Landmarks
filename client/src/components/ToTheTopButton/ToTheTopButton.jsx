import styles from './ToTheTopButton.module.css';
import toTheTop from '../../utils/toTheTop';

export default function ToTheTopButton() {
    return (
        <div className={styles['to-the-top']}>
            <i
                onClick={() => toTheTop('smooth')}
                className="fa-solid fa-circle-chevron-up"
            ></i>
        </div>
    );
}
