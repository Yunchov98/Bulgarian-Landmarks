import { useContext, useState } from 'react';

import styles from './Comment.module.css';
import AuthContext from '../../../../contexts/authContext';
import dateConverter from '../../../../utils/dateConverter';

import DeleteComment from './DeleteComment/DeleteComment';
import EditComment from './EditComment/EditComment';

export default function Comment({
    postId,
    comment,
    deleteCommentHandler,
    editCommentHandler,
}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const { userId } = useContext(AuthContext);

    const onEditButtonClickHandle = () => setShowEditModal(true);

    const onDeleteButtonClickHandle = () => setShowDeleteModal(true);

    const closeDeleteModal = () => setShowDeleteModal(false);

    const closeEditModal = () => setShowEditModal(false);

    return (
        <>
            {showDeleteModal ? (
                <div
                    onClick={closeDeleteModal}
                    className={styles['backdrop']}
                ></div>
            ) : (
                ''
            )}
            {showDeleteModal && (
                <DeleteComment
                    onClose={closeDeleteModal}
                    deleteCommentHandler={deleteCommentHandler}
                    comment={comment}
                />
            )}
            <img
                className={styles['comment-user-img']}
                src={comment.owner?.avatar || '/images/default-profile-pic.png'}
                alt="user"
            />
            <div
                className={
                    userId === comment._ownerId
                        ? styles['comment-info-owner']
                        : styles['comment-info']
                }
            >
                <div className={styles['comment-header']}>
                    <p className={styles['username']}>
                        {comment.owner.username}
                    </p>
                    <p className={styles['posted-on']}>
                        Posted on: {dateConverter(comment._createdOn)}
                    </p>
                    <div className={styles['description']}>
                        {showEditModal ? (
                            <EditComment
                                postId={postId}
                                editCommentHandler={editCommentHandler}
                                onClose={closeEditModal}
                                comment={comment}
                            />
                        ) : (
                            comment.commentData
                        )}
                    </div>
                </div>

                {userId === comment._ownerId && (
                    <div className={styles['buttons']}>
                        <p className={styles['edit-button']}>
                            <i
                                onClick={onEditButtonClickHandle}
                                className="fa-solid fa-pen-to-square"
                            ></i>
                        </p>
                        <p className={styles['delete-button']}>
                            <i
                                onClick={onDeleteButtonClickHandle}
                                className="fa-solid fa-trash-can"
                            ></i>
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
