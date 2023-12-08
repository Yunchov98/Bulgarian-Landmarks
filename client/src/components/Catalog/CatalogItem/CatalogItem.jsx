import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { commentValidation } from './commentValidation';
import {
    CommentForm,
    PATH,
    CommentActions,
} from '../../../core/environments/constants';
import AuthContext from '../../../contexts/authContext';
import styles from './CatalogItem.module.css';
import * as commentService from '../../../core/services/commentService';
import * as postService from '../../../core/services/postService';
import likeReducer from '../../../reducers/likeReducer';
import commentReducer from '../../../reducers/commentReducer';
import dateConverter from '../../../utils/dateConverter';

import PostDetails from '../../PostDetails/PostDetails';
import Comment from './Comment/Comment';

const initialValues = {
    [CommentForm.CommentArea]: '',
};

export default function CatalogItem({
    landmarkDescription,
    postDescription,
    landmarkTitle,
    postImage,
    _createdOn,
    location,
    _ownerId,
    owner,
    _id,
}) {
    const [showDetails, setShowDetails] = useState(false);
    const [showAllComments, setShowAllComments] = useState(false);
    const [canLike, setCanLike] = useState(true);
    const [comments, dispatchComment] = useReducer(commentReducer, []);
    const [likes, dispatchLike] = useReducer(likeReducer, []);

    const navigate = useNavigate();

    const { avatar, username, userId, isAuthenticated } =
        useContext(AuthContext);

    const { values, isSubmitting, handleChange, handleSubmit, resetForm } =
        useFormik({
            initialValues,
            onSubmit,
            validationSchema: commentValidation,
        });

    useEffect(() => {
        commentService.getAllComments(_id).then((result) => {
            dispatchComment({
                type: CommentActions.GetAllComment,
                payload: result,
            });
        });

        postService.getAllLikes(_id).then((result) => {
            dispatchLike({
                type: 'getLikes',
                payload: result,
            });
        });

        postService
            .canLike(_id, userId)
            .then((result) => setCanLike(result === 0 && isAuthenticated));
    }, [likes.length]);

    const textareaRef = useRef(null);
    const mediaSectionRef = useRef(null);

    const focusInput = () => {
        if (textareaRef.current && mediaSectionRef.current) {
            mediaSectionRef.current.scrollIntoView();
            textareaRef.current.focus();
        }
    };

    const onViewMoreHandleClick = () => {
        setShowDetails(true);
        mediaSectionRef.current.scrollIntoView({
            block: 'center',
        });
    };

    const showAllCommentsToggle = () => setShowAllComments(!showAllComments);

    async function onSubmit(values) {
        try {
            const newComment = await commentService.createComment(
                _id,
                values[CommentForm.CommentArea]
            );

            newComment.owner = { username, avatar };

            dispatchComment({
                type: CommentActions.CreateComment,
                payload: newComment,
            });

            resetForm();
        } catch (error) {
            console.log(error);
        }
    }

    function editCommentHandler(editedComment) {
        editedComment.owner = { username, avatar };

        dispatchComment({
            type: CommentActions.EditComment,
            payload: editedComment,
        });
    }

    function deleteCommentHandler(comment) {
        dispatchComment({
            type: CommentActions.DeleteComment,
            payload: comment,
        });
    }

    async function addLikeHandler() {
        try {
            if (canLike) {
                const like = await postService.addLike(_id);

                dispatchLike({
                    type: 'addLike',
                    payload: like,
                });
            } else {
                if (!isAuthenticated) {
                    navigate(PATH.login);
                    return;
                }

                const result = await postService.getCurrentLike(_id, userId);
                let like;
                result.map((l) =>
                    l._ownerId === userId ? (like = { ...l }) : ''
                );

                await postService.removeLike(like._id);

                dispatchLike({
                    type: 'removeLike',
                    payload: like,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <article className={styles['post-item']}>
            {showDetails && (
                <PostDetails
                    owner={owner}
                    _createdOn={_createdOn}
                    location={location}
                    landmarkTitle={landmarkTitle}
                    landmarkDescription={landmarkDescription}
                    postImage={postImage}
                    postId={_id}
                    onClose={() => setShowDetails(false)}
                />
            )}
            <section className={styles['user-info']}>
                <div className={styles['user-info-wrapper']}>
                    <div className={styles['img-container']}>
                        <Link to={PATH.userProfile(owner._id)}>
                            <img
                                className={styles['user-img']}
                                src={
                                    owner.avatar ||
                                    '/images/default-profile-pic.png'
                                }
                                alt="User profile pic"
                            />
                        </Link>
                    </div>
                    <div className={styles['post-info']}>
                        <p className={styles['username']}>{owner.username}</p>
                        <p className={styles['posted-on']}>
                            Posted on {dateConverter(_createdOn)}
                        </p>
                    </div>
                </div>
                {userId === _ownerId ? (
                    <div className={styles['edit']}>
                        <p onClick={onViewMoreHandleClick}>View more</p>
                        <Link to={PATH.editPost(_id)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                    </div>
                ) : (
                    <p
                        onClick={onViewMoreHandleClick}
                        className={styles['view-more']}
                    >
                        View More
                    </p>
                )}
            </section>
            <section className={styles['content-description']}>
                <p>{postDescription}</p>
            </section>
            <section ref={mediaSectionRef} className={styles['media']}>
                <img src={postImage} alt={`${username}'s post image`} />
            </section>
            <section className={styles['likes']}>
                <div className={styles['likes-count']}>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p>{likes.length}</p>
                </div>
                <p
                    onClick={showAllCommentsToggle}
                    className={styles['comments-count']}
                >
                    {comments.length} comments
                </p>
            </section>
            <section className={styles['buttons']}>
                {!isAuthenticated && (
                    <div
                        onClick={addLikeHandler}
                        className={styles['like-button']}
                    >
                        <i className="fa-solid fa-thumbs-up"></i>
                        <p>Like</p>
                    </div>
                )}
                {isAuthenticated && (
                    <div
                        onClick={addLikeHandler}
                        className={
                            canLike ? styles['like-button'] : styles['is-liked']
                        }
                    >
                        <i className="fa-solid fa-thumbs-up"></i>
                        <p>Like</p>
                    </div>
                )}
                <div
                    onClick={focusInput}
                    className={styles['comment-button-wrapper']}
                >
                    <i className="fa-solid fa-comment"></i>
                    <p className={styles['comment-button']}>Comment</p>
                </div>
            </section>
            <section className={styles['comments']}>
                <ul>
                    {showAllComments
                        ? comments.map((comment) => (
                              <li
                                  key={comment._id}
                                  className={styles['comment']}
                              >
                                  <Comment
                                      postId={_id}
                                      comment={comment}
                                      editCommentHandler={editCommentHandler}
                                      deleteCommentHandler={
                                          deleteCommentHandler
                                      }
                                  />
                              </li>
                          ))
                        : comments.slice(-2).map((comment) => (
                              <li
                                  key={comment._id}
                                  className={styles['comment']}
                              >
                                  <Comment
                                      postId={_id}
                                      comment={comment}
                                      editCommentHandler={editCommentHandler}
                                      deleteCommentHandler={
                                          deleteCommentHandler
                                      }
                                  />
                              </li>
                          ))}
                </ul>
                {comments.length > 2 && (
                    <p
                        onClick={showAllCommentsToggle}
                        className={styles['all-comments']}
                    >
                        {showAllComments
                            ? 'Hide comments'
                            : 'View all comments'}
                    </p>
                )}
                {comments.length === 0 && (
                    <p className={styles['no-comments']}>No comments yet.</p>
                )}
            </section>
            <section className={styles['add-comment']}>
                <img
                    className={styles['user-img-comments']}
                    src={avatar || '/images/default-profile-pic.png'}
                    alt="user"
                />
                <div className={styles['comment-area']}>
                    <form
                        className={styles['comment-form']}
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor={values[CommentForm.CommentArea]}
                        ></label>
                        <textarea
                            ref={textareaRef}
                            className={styles['comment-input']}
                            cols="1"
                            rows="1"
                            placeholder="Write a comment..."
                            name={CommentForm.CommentArea}
                            id={CommentForm.CommentArea}
                            onChange={handleChange}
                            value={values[CommentForm.CommentArea]}
                        ></textarea>
                        <button
                            className={
                                values[CommentForm.CommentArea].length === 0
                                    ? styles['submit-form-button-error']
                                    : styles['submit-form-button']
                            }
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <p className={styles['sending-text']}>
                                    Sending...
                                </p>
                            ) : (
                                <i className="fa-solid fa-paper-plane"></i>
                            )}
                        </button>
                    </form>
                </div>
            </section>
        </article>
    );
}
