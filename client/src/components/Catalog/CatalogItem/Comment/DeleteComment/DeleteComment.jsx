import { useState } from 'react';

import styles from './DeleteComment.module.css';
import * as commentService from '../../../../../core/services/commentService';

export default function DeleteComment({
    onClose,
    deleteCommentHandler,
    comment,
}) {
    const [isDeleting, setIsDeleting] = useState(false);

    async function deleteComment() {
        try {
            setIsDeleting(true);
            await commentService.deleteComment(comment._id);
            await deleteCommentHandler(comment);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles['delete-comment']}>
            <p onClick={onClose} className={styles['cancel-button']}>
                Cancel
            </p>
            <p onClick={deleteComment} className={styles['delete-button']}>
                {isDeleting ? 'Deleting...' : 'Delete'}
            </p>
        </section>
    );
}
