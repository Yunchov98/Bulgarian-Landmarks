import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { PATH } from '../../core/environments/constants';
import { SearchKeys } from '../../core/environments/constants';
import styles from './Search.module.css';
import * as userService from '../../core/services/userService';

import Spinner from '../Spinner/Spinner';

const initialValues = {
    [SearchKeys.Search]: '',
};

export default function Search() {
    const [searchedData, setSearchedData] = useState([]);
    const [showSearchedData, setShowSearchedData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
    });

    useEffect(() => {
        userService
            .getAllUsers()
            .then((users) =>
                setSearchedData(
                    users.filter((user) =>
                        user.username
                            .toLowerCase()
                            .includes(values.search.toLowerCase())
                    )
                )
            )
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [values.search]);

    function onSubmit() {
        setShowSearchedData(true);
    }

    return (
        <section className={styles['search-section']}>
            <h2>Search...</h2>
            <form onSubmit={handleSubmit} className={styles['search-form']}>
                <input
                    className={styles['search-bar']}
                    type="text"
                    name={SearchKeys.Search}
                    id={SearchKeys.Search}
                    placeholder="Search..."
                    onChange={handleChange}
                    value={values[SearchKeys.Search]}
                />
                <input
                    className={styles['search-button']}
                    type="submit"
                    value="Search"
                />
            </form>
            {showSearchedData && (
                <section className={styles['searched-users']}>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        searchedData.map((user) => (
                            <article
                                key={user._id}
                                className={styles['user-info']}
                            >
                                <div className={styles['media']}>
                                    <Link to={PATH.userProfile(user._ownerId)}>
                                        <img src={user.avatar} alt="" />
                                    </Link>
                                </div>
                                <p>{user.username}</p>
                            </article>
                        ))
                    )}
                </section>
            )}
        </section>
    );
}
