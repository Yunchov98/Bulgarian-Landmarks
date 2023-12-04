import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { useFormik } from 'formik';

import PostDetails from '../../PostDetails/PostDetails';

import { Link } from 'react-router-dom';
import {
    CommentForm,
    PATH,
    CommentActions,
} from '../../../core/environments/constants';
import styles from './CatalogItem.module.css';
import AuthContext from '../../../contexts/authContext';
import dateConverter from '../../../utils/dateConverter';
import * as commentService from '../../../core/services/commentService';
import commentReducer from '../../../reducers/commentReducer';
import { commentValidation } from './commentValidation';

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
    const [comments, dispatch] = useReducer(commentReducer, []);
    const { avatar, username, userId } = useContext(AuthContext);
    const { values, isSubmitting, handleChange, handleSubmit, resetForm } =
        useFormik({
            initialValues,
            onSubmit,
            validationSchema: commentValidation,
        });

    useEffect(() => {
        commentService.getAllComments(_id).then((result) => {
            dispatch({
                type: CommentActions.GetAllComment,
                payload: result,
            });
            console.log(result);
        });
    }, []);

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

            dispatch({
                type: CommentActions.CreateComment,
                payload: newComment,
            });

            resetForm();
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
                        <img
                            className={styles['user-img']}
                            src={
                                owner.avatar ||
                                '/images/default-profile-pic.png'
                            }
                            alt="User profile pic"
                        />
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
                    <p>0</p>
                </div>
                <p
                    onClick={showAllCommentsToggle}
                    className={styles['comments-count']}
                >
                    {comments.length} comments
                </p>
            </section>
            <section className={styles['buttons']}>
                <div className={styles['like-button']}>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p>Like</p>
                </div>
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
                        ? comments.map(({ _id, commentData, owner }) => (
                              <li key={_id} className={styles['comment']}>
                                  <img
                                      className={styles['comment-user-img']}
                                      src={
                                          owner?.avatar ||
                                          '/images/default-profile-pic.png'
                                      }
                                      alt="user"
                                  />
                                  <div className={styles['comment-info']}>
                                      <p className={styles['username']}>
                                          {owner.username}
                                      </p>
                                      <p className={styles['description']}>
                                          {commentData}
                                      </p>
                                  </div>
                              </li>
                          ))
                        : comments
                              .slice(-2)
                              .map(({ _id, commentData, owner }) => (
                                  <li key={_id} className={styles['comment']}>
                                      <img
                                          className={styles['comment-user-img']}
                                          src={
                                              owner?.avatar ||
                                              '/images/default-profile-pic.png'
                                          }
                                          alt="user"
                                      />
                                      <div className={styles['comment-info']}>
                                          <p className={styles['username']}>
                                              {owner.username}
                                          </p>
                                          <p className={styles['description']}>
                                              {commentData}
                                          </p>
                                      </div>
                                  </li>
                              ))}
                </ul>
                {comments.length > 0 && (
                    <p
                        onClick={showAllCommentsToggle}
                        className={styles['all-comments']}
                    >
                        {showAllComments
                            ? 'Hide comments'
                            : 'View all comments'}
                    </p>
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
                            className={styles['submit-form-button']}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </section>
        </article>
    );
}
