import { useRef } from 'react';

import styles from './CatalogItem.module.css';

export default function CatalogItem() {
    const inputRef = useRef(null);
    const mediaSectionRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current && mediaSectionRef.current) {
            mediaSectionRef.current.scrollIntoView();
            inputRef.current.focus();
        }
    };

    return (
        <article className={styles['post-item']}>
            <section className={styles['user-info']}>
                <img
                    className={styles['user-img']}
                    src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                    alt="User profile pic"
                />
                <div className={styles['post-info']}>
                    <p className={styles['username']}>Qsen</p>
                    <p className={styles['posted-on']}>Posted on 15.11</p>
                </div>
            </section>
            <section className={styles['content-description']}>
                <p>This is a landmark in Bulgaria</p>
            </section>
            <section ref={mediaSectionRef} className={styles['media']}>
                <img src="/images/R.jpg" alt="" />
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
                    className={styles['comment-user-img']}
                    src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                    alt="user"
                />
                <div className={styles['comment-area']}>
                    <input
                        ref={inputRef}
                        className={styles['comment-input']}
                        type="text"
                        placeholder="Write a comment..."
                    />
                    <i className="fa-solid fa-paper-plane"></i>
                </div>
            </section>
        </article>
    );
}
