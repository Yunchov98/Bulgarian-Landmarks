import styles from './Post.module.css';
import dateConverter from '../../../utils/dateConverter';

export default function Post({
    owner,
    _createdOn,
    postDescription,
    postImage,
}) {
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
                    </div>
                </div>
            </section>
            <section className={styles['content-description']}>
                <p>{postDescription}</p>
            </section>
            <section className={styles['media']}>
                <img src={postImage} alt={`${owner.username}'s post image`} />
            </section>
        </article>
    );
}
