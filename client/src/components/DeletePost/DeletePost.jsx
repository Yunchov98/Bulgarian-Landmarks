import { useNavigate } from 'react-router-dom';

import { PATH } from '../../core/environments/constants';
import styles from './DeletePost.module.css';
import * as postService from '../../core/services/postService';

export default function DeletePost({ postId, onClose }) {
    const navigate = useNavigate();

    const deleteButtonClickHandler = async () => {
        try {
            await postService.deletePost(postId);

            navigate(PATH.success);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles['delete-section']}>
            <div className={styles['media']}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
            <div className={styles['heading-message']}>
                <h2 className={styles['section-heading']}>Are you sure?</h2>
                <p className={styles['text-message']}>
                    Do you really want to delete this record? This process
                    cannot be undone.
                </p>
            </div>
            <div className={styles['buttons']}>
                <p onClick={onClose} className={styles['cancel-button']}>
                    Cancel
                </p>
                <p
                    onClick={deleteButtonClickHandler}
                    className={styles['delete-button']}
                >
                    Delete
                </p>
            </div>
        </section>
    );
}
