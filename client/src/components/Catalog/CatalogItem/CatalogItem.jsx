import { useContext, useRef } from 'react';
import { useFormik } from 'formik';

import styles from './CatalogItem.module.css';
import AuthContext from '../../../contexts/authContext';
import dateConverter from '../../../utils/dateConverter';

const initialValues = {
    commentInput: '',
};

export default function CatalogItem({
    landmarkDescription,
    landmarkTitle,
    location,
    postDescription,
    postImage,
    _createdOn,
    _ownerId,
    owner,
}) {
    const { values, handleChange, handleBlur, errors, handleSubmit } =
        useFormik({
            initialValues,
            onSubmit,
        });

    const { avatar, username, userId } = useContext(AuthContext);

    const inputRef = useRef(null);
    const mediaSectionRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current && mediaSectionRef.current) {
            mediaSectionRef.current.scrollIntoView();
            inputRef.current.focus();
        }
    };

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <article className={styles['post-item']}>
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
                        <p className={styles['posted-on']}>{location}</p>
                    </div>
                </div>
                {userId === _ownerId ? (
                    <div className={styles['edit']}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                ) : (
                    <p className={styles['edit']}>View More</p>
                )}
            </section>
            <section className={styles['content-description']}>
                <p>{postDescription}</p>
                <p>{landmarkDescription}</p>
            </section>
            <section ref={mediaSectionRef} className={styles['media']}>
                <img src={postImage} alt={`${username}'s post image`} />
            </section>
            <section className={styles['likes']}>
                <div className={styles['likes-count']}>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p>0</p>
                </div>
                <p className={styles['comments-count']}>0 comments</p>
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
                <div className={styles['comment']}>
                    <img
                        className={styles['comment-user-img']}
                        src="https://th.bing.com/th/id/R.0d6c0a0be6b59fe6fde4953fa6d820d2?rik=9Yk6lg8aU5xoww&riu=http%3a%2f%2fcdnfiles.hdrcreme.com%2fwebsite%2fassets%2fprofile%2f7224%2fthumb%2fthumb_user_default.png%3f1338030307&ehk=Mvz8YPRO%2bZfjexGhoeNfkoX84zH2X0krEVkT7sS59Y0%3d&risl=&pid=ImgRaw&r=0"
                        alt="user"
                    />
                    <div className={styles['comment-info']}>
                        <p className={styles['username']}>Comment User Name</p>
                        <p className={styles['description']}>First Comment</p>
                    </div>
                </div>
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
                        <label htmlFor="commentInput"></label>
                        <input
                            ref={inputRef}
                            className={styles['comment-input']}
                            type="text"
                            placeholder="Write a comment..."
                            name="commentInput"
                            id="commentInput"
                            onChange={handleChange}
                            value={values.commentInput}
                        />
                        <button
                            className={styles['submit-form-button']}
                            type="submit"
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </section>
        </article>
    );
}
