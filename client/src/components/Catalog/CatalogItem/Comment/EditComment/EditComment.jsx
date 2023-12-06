import { useFormik } from 'formik';

import * as commentService from '../../../../../core/services/commentService';
import styles from './EditComment.module.css';
import { editCommentValidation } from './editCommentValidation';

export default function EditComment({
    onClose,
    comment,
    editCommentHandler,
    postId,
}) {
    const { values, isSubmitting, handleSubmit, handleChange } = useFormik({
        initialValues: {
            editComment: comment.commentData,
        },
        onSubmit,
        validationSchema: editCommentValidation,
        enableReinitialize: true,
    });

    async function onSubmit(values) {
        try {
            const editedComment = await commentService.editComment(
                comment._id,
                postId,
                values.editComment
            );

            editCommentHandler(editedComment);

            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles['edit-comment']}>
            <form
                onSubmit={handleSubmit}
                className={styles['edit-commnet-form']}
            >
                <label htmlFor="editComment"></label>
                <textarea
                    name="editComment"
                    id="editComment"
                    className={styles['edit-comment-textarea']}
                    cols="30"
                    rows="3"
                    onChange={handleChange}
                    value={values.editComment}
                ></textarea>
                <div className={styles['buttons']}>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles['cancel-button']}
                    >
                        Cancel
                    </button>
                    <button
                        disabled={isSubmitting}
                        className={
                            values.editComment.length > 0
                                ? styles['update-button']
                                : styles['update-button-disabled']
                        }
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
}
