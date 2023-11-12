import styles from './ToTheTopButton.module.css';

export default function () {
    function toTheTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className={styles['to-the-top']}>
            <i onClick={toTheTop} className="fa-solid fa-circle-chevron-up"></i>
        </div>
    );
}
