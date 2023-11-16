import { useRef } from 'react';

import styles from './Catalog.module.css';

export default function Catalog() {
    const inputRef = useRef(null);
    const mediaSectionRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current && mediaSectionRef.current) {
            mediaSectionRef.current.scrollIntoView({behavior: 'smooth'})
            inputRef.current.focus();
        }
    };

    return (
        <section className={styles['catalog-section']}>
            <h2 className={styles['catalog-heading']}>Landmarks</h2>
            <div className={styles['content-wrapper']}>
                <article className={styles['post-item']}>
                    <section className={styles['user-info']}>
                        <img
                            className={styles['user-img']}
                            src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                            alt="User profile pic"
                        />
                        <div className={styles['post-info']}>
                            <p className={styles['username']}>Qsen</p>
                            <p className={styles['posted-on']}>
                                Posted on 15.11
                            </p>
                        </div>
                    </section>
                    <section className={styles['content-description']}>
                        <p>This is a landmark in Bulgaria</p>
                    </section>
                    <section ref={mediaSectionRef} id="media" className={styles['media']}>
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
                            className={styles['comment-button-wrapper']}
                        >
                            <i className="fa-solid fa-comment"></i>
                            <p
                            onClick={focusInput}
                                // href="#media"
                                className={styles['comment-button']}
                            >
                                Comment
                            </p>
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
                                <p className={styles['username']}>
                                    Comment User Name
                                </p>
                                <p className={styles['description']}>
                                    First Comment
                                </p>
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

                <article className={styles['post-item']}>
                    <section className={styles['user-info']}>
                        <img
                            className={styles['user-img']}
                            src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-128.png"
                            alt="User profile pic"
                        />
                        <div className={styles['post-info']}>
                            <p className={styles['username']}>Asen</p>
                            <p className={styles['posted-on']}>
                                Posted on 15.11
                            </p>
                        </div>
                    </section>
                    <section className={styles['content-description']}>
                        <p>This is Shipka. It's a landmark in Bulgaria.</p>
                    </section>
                    <section className={styles['media']}>
                        <img src="/images/Shipka.jpg" alt="" />
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
                        <div className={styles['comment-button']}>
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
                                <p className={styles['username']}>
                                    Comment User Name
                                </p>
                                <p className={styles['description']}>
                                    First Comment
                                </p>
                            </div>
                        </div>
                        <div className={styles['comment']}>
                            <img
                                className={styles['comment-user-img']}
                                src="https://th.bing.com/th/id/R.0d6c0a0be6b59fe6fde4953fa6d820d2?rik=9Yk6lg8aU5xoww&riu=http%3a%2f%2fcdnfiles.hdrcreme.com%2fwebsite%2fassets%2fprofile%2f7224%2fthumb%2fthumb_user_default.png%3f1338030307&ehk=Mvz8YPRO%2bZfjexGhoeNfkoX84zH2X0krEVkT7sS59Y0%3d&risl=&pid=ImgRaw&r=0"
                                alt="user"
                            />
                            <div className={styles['comment-info']}>
                                <p className={styles['username']}>Pesho</p>
                                <p className={styles['description']}>
                                    Wow! This place is amazing!!! How can I go
                                    there? Please give me more info about it! I
                                    am in love!
                                </p>
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
                                className={styles['comment-input']}
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </section>
                </article>

                <article className={styles['post-item']}>
                    <section className={styles['user-info']}>
                        <img
                            className={styles['user-img']}
                            src="https://th.bing.com/th/id/OIP.oZ8lI6UXVq61B1_ACuRwnwAAAA?pid=ImgDet&w=200&h=200&rs=1"
                            alt="User profile pic"
                        />
                        <div className={styles['post-info']}>
                            <p className={styles['username']}>Toshko</p>
                            <p className={styles['posted-on']}>
                                Posted on 15.11
                            </p>
                        </div>
                    </section>
                    <section className={styles['content-description']}>
                        <p>
                            This is Belogradchik. It's a landmark in Bulgaria.
                        </p>
                    </section>
                    <section className={styles['media']}>
                        <img src="/images/Belogradchik.jpg" alt="" />
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
                        <div className={styles['comment-button']}>
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
                                <p className={styles['username']}>Alex</p>
                                <p className={styles['description']}>
                                    Ilon Musk favorite place! Haha. This is very
                                    beautiful!
                                </p>
                            </div>
                        </div>
                        <div className={styles['comment']}>
                            <img
                                className={styles['comment-user-img']}
                                src="https://th.bing.com/th/id/R.0d6c0a0be6b59fe6fde4953fa6d820d2?rik=9Yk6lg8aU5xoww&riu=http%3a%2f%2fcdnfiles.hdrcreme.com%2fwebsite%2fassets%2fprofile%2f7224%2fthumb%2fthumb_user_default.png%3f1338030307&ehk=Mvz8YPRO%2bZfjexGhoeNfkoX84zH2X0krEVkT7sS59Y0%3d&risl=&pid=ImgRaw&r=0"
                                alt="user"
                            />
                            <div className={styles['comment-info']}>
                                <p className={styles['username']}>Pesho</p>
                                <p className={styles['description']}>
                                    Wow! This place is amazing!!! How can I go
                                    there? Please give me more info about it! I
                                    am in love!
                                </p>
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
                                className={styles['comment-input']}
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </section>
                </article>

                <article className={styles['post-item']}>
                    <section className={styles['user-info']}>
                        <img
                            className={styles['user-img']}
                            src="https://th.bing.com/th/id/OIP.oZ8lI6UXVq61B1_ACuRwnwAAAA?pid=ImgDet&w=200&h=200&rs=1"
                            alt="User profile pic"
                        />
                        <div className={styles['post-info']}>
                            <p className={styles['username']}>Toshko</p>
                            <p className={styles['posted-on']}>
                                Posted on 15.11
                            </p>
                        </div>
                    </section>
                    <section className={styles['content-description']}>
                        <p>
                            This is Belogradchik. It's a landmark in Bulgaria.
                        </p>
                    </section>
                    <section className={styles['media']}>
                        <img
                            src="/images/mountain-river-forest-sky-landscapes.jpg"
                            alt=""
                        />
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
                        <div className={styles['comment-button']}>
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
                                <p className={styles['username']}>Alex</p>
                                <p className={styles['description']}>
                                    Ilon Musk favorite place! Haha. This is very
                                    beautiful!
                                </p>
                            </div>
                        </div>
                        <div className={styles['comment']}>
                            <img
                                className={styles['comment-user-img']}
                                src="https://th.bing.com/th/id/R.0d6c0a0be6b59fe6fde4953fa6d820d2?rik=9Yk6lg8aU5xoww&riu=http%3a%2f%2fcdnfiles.hdrcreme.com%2fwebsite%2fassets%2fprofile%2f7224%2fthumb%2fthumb_user_default.png%3f1338030307&ehk=Mvz8YPRO%2bZfjexGhoeNfkoX84zH2X0krEVkT7sS59Y0%3d&risl=&pid=ImgRaw&r=0"
                                alt="user"
                            />
                            <div className={styles['comment-info']}>
                                <p className={styles['username']}>Pesho</p>
                                <p className={styles['description']}>
                                    Wow! This place is amazing!!! How can I go
                                    there? Please give me more info about it! I
                                    am in love!
                                </p>
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
                                className={styles['comment-input']}
                                type="text"
                                placeholder="Write a comment..."
                            />
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </section>
                </article>
            </div>
        </section>
    );
}
