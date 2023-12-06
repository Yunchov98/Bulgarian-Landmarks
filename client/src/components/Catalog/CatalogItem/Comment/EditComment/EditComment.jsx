import { useFormik } from 'formik';

import { editCommentValidation } from './editCommentValidation';
import { EditCommentKeys } from '../../../../../core/environments/constants';
import * as commentService from '../../../../../core/services/commentService';
import styles from './EditComment.module.css';

export default function EditComment({
    onClose,
    comment,
    editCommentHandler,
    postId,
}) {
    const { values, isSubmitting, handleSubmit, handleChange } = useFormik({
        initialValues: {
            [EditCommentKeys.EditComment]: comment.commentData,
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
                <label htmlFor={EditCommentKeys.EditComment}></label>
                <textarea
                    name={EditCommentKeys.EditComment}
                    id={EditCommentKeys.EditComment}
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
