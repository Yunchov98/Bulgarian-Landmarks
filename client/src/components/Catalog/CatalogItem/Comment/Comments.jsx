import { useContext, useState } from 'react';

import styles from './Comment.module.css';
import AuthContext from '../../../../contexts/authContext';
import dateConverter from '../../../../utils/dateConverter';

import DeleteComment from './DeleteComment/DeleteComment';

export default function Comment({ comment, deleteCommentHandler }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const { userId } = useContext(AuthContext);

    const onDeleteButtonClickHandle = () => setShowDeleteModal(true);

    const onClose = () => setShowDeleteModal(false);

    return (
        <>
            {showDeleteModal ? (
                <div onClick={onClose} className={styles['backdrop']}></div>
            ) : (
                ''
            )}
            {showDeleteModal && (
                <DeleteComment
                    onClose={onClose}
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
                    <p className={styles['description']}>
                        {comment.commentData}
                    </p>
                </div>

                {userId === comment._ownerId && (
                    <div className={styles['buttons']}>
                        <p className={styles['edit-button']}>
                            <i className="fa-solid fa-pen-to-square"></i>
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
