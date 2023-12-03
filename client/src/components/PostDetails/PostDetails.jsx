import { useContext, useState } from 'react';
import dateConverter from '../../utils/dateConverter';
import styles from './PostDetails.module.css';
import AuthContext from '../../contexts/authContext';
import DeletePost from '../DeletePost/DeletePost';

export default function PostDetails({
    owner,
    _createdOn,
    location,
    landmarkTitle,
    landmarkDescription,
    postImage,
    onClose,
    postId,
}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { userId } = useContext(AuthContext);

    const onDeleteIconClickHandle = () => {
        setShowDeleteModal(true);
    };

    return (
        <>
            {showDeleteModal ? (
                <DeletePost
                    postId={postId}
                    onClose={() => setShowDeleteModal(false)}
                />
            ) : (
                ''
            )}
            <div onClick={onClose} className={styles['backdrop']}></div>
            <article className={styles['post-details']}>
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
                            <p className={styles['username']}>
                                {owner.username}
                            </p>
                            <p className={styles['posted-on']}>
                                Posted on {dateConverter(_createdOn)}
                            </p>
                            <div className={styles['location-wrapper']}>
                                <i className="fa-solid fa-location-dot"></i>
                                <p className={styles['posted-on']}>
                                    {location}
                                </p>
                            </div>
                        </div>
                    </div>
                    {owner._id === userId ? (
                        <p
                            onClick={onDeleteIconClickHandle}
                            className={styles['delete-button']}
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </p>
                    ) : (
                        ''
                    )}
                </section>

                <section className={styles['content-description']}>
                    <p>Landmark: {landmarkTitle}</p>
                    <p>{landmarkDescription}</p>
                </section>
                <section className={styles['media']}>
                    <img
                        src={postImage}
                        alt={`${owner.username}'s post image`}
                    />
                </section>
            </article>
        </>
    );
}
