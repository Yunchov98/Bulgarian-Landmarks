import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Post from './Post/Post';
import styles from './UserProfile.module.css';
import * as userService from '../../core/services/userService';

export default function UserProfile() {
    const [posts, setPosts] = useState([]);
    const [userData, setUserData] = useState({});

    const { userId } = useParams();

    useEffect(() => {
        userService
            .getUserPosts(userId)
            .then((result) => {
                setPosts(result);
            })
            .catch((error) => console.log(error));

        userService
            .getUserInfo(userId)
            .then((result) => {
                setUserData(result[0]);
            })
            .catch((error) => console.log(error));
    }, [userId]);

    return (
        <section className={styles['user-profile']}>
            <section className={styles['profile-header']}>
                <div className={styles['user-info']}>
                    <div className={styles['profile']}>
                        <img
                            className={styles['profile-pic']}
                            src={
                                userData?.avatar ||
                                '/images/default-profile-pic.png'
                            }
                            alt=""
                        />
                        <div className={styles['user-post-data']}>
                            <p className={styles['username']}>
                                {userData.username}
                            </p>
                            <p>Posts: {posts.length}</p>
                        </div>
                    </div>

                    <div className={styles['user-data']}>
                        <p>Email: {userData.email}</p>
                        <p>Gender: {userData.gender}</p>
                        <p>Born: {userData.bornDate}</p>
                    </div>
                </div>
            </section>

            <section className={styles['most-liked-posts']}>
                {posts.length === 0 ? (
                    'No posts yet'
                ) : (
                    <>
                        <h2 className={styles['section-heading']}>
                            {userData.username}'s last 3 posts
                        </h2>

                        <div className={styles['posts']}>
                            {posts.length > 0 &&
                                posts
                                    .slice(0, 3)
                                    .map((post) => (
                                        <Post key={post._id} {...post} />
                                    ))}
                        </div>
                    </>
                )}
            </section>
        </section>
    );
}
