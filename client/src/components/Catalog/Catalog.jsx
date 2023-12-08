import { useEffect, useState } from 'react';

import styles from './Catalog.module.css';
import CatalogItem from './CatalogItem/CatalogItem';
import * as postService from '../../core/services/postService';
import Spinner from '../Spinner/Spinner';

export default function Catalog() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        postService
            .getAllPosts()
            .then((result) => {
                setPosts(result.reverse());
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section className={styles['catalog-section']}>
            <h2 className={styles['catalog-heading']}>Landmarks</h2>
            <div className={styles['content-wrapper']}>
                {isLoading && <Spinner />}
                {posts.map((post) => (
                    <CatalogItem key={post._id} {...post} />
                ))}
                {!isLoading && posts.length === 0 && (
                    <h2 className={styles['no-posts']}>No posts yet!</h2>
                )}
            </div>
        </section>
    );
}
