import { useEffect, useState } from 'react';

import CatalogItem from './CatalogItem/CatalogItem';
import * as postService from '../../services/postService';

import styles from './Catalog.module.css';

export default function Catalog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts().then((result) => {
            setPosts(result.reverse());
            console.log(result);
        });
    }, []);
    return (
        <section className={styles['catalog-section']}>
            <h2 className={styles['catalog-heading']}>Landmarks</h2>
            <div className={styles['content-wrapper']}>
                {posts.map((post) => (
                    <CatalogItem key={post._id} {...post} />
                ))}
            </div>
        </section>
    );
}
