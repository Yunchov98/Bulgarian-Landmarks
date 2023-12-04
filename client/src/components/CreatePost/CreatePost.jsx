import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { CreateFormKeys, PATH } from '../../core/environments/constants';
import { toBase64 } from '../../utils/base64';
import { createValidation } from './createValidation';
import * as postService from '../../core/services/postService';
import styles from './CreatePost.module.css';
import AuthContext from '../../contexts/authContext';

const initialValues = {
    [CreateFormKeys.LandmarkTitle]: '',
    [CreateFormKeys.Location]: '',
    [CreateFormKeys.PostDescription]: '',
    [CreateFormKeys.LandmarkDescription]: '',
    [CreateFormKeys.PostImage]: '',
};

export default function CreatePost() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        setFieldValue,
        touched,
        resetForm,
    } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: createValidation,
    });

    async function onSubmit(values) {
        try {
            values.postImage = await toBase64(values.postImage[0]);

            await postService.createPost(values);

            navigate(PATH.catalog);
        } catch (error) {
            if (error.code === 401) {
                resetForm();

                logoutHandler();

                navigate(PATH.login);
            }
        }
    }

    return (
        <section className={styles['create-post']}>
            <div className={styles['content-wrapper']}>
                <h2>Create Post</h2>
                <form onSubmit={handleSubmit} className={styles['create-form']}>
                    <div className={styles['form-item']}>
                        {errors[CreateFormKeys.LandmarkTitle] &&
                            touched[CreateFormKeys.LandmarkTitle] && (
                                <p className={styles['error']}>
                                    {errors[CreateFormKeys.LandmarkTitle]}
                                </p>
                            )}
                        <label htmlFor={CreateFormKeys.LandmarkTitle}></label>
                        <input
                            className={
                                errors[CreateFormKeys.LandmarkTitle] &&
                                touched[CreateFormKeys.LandmarkTitle]
                                    ? styles['landmark-title-error']
                                    : styles['landmark-title']
                            }
                            type="text"
                            name={CreateFormKeys.LandmarkTitle}
                            id={CreateFormKeys.LandmarkTitle}
                            placeholder="Landmark title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[CreateFormKeys.LandmarkTitle]}
                        />
                    </div>
                    <div className={styles['form-item']}>
                        {errors[CreateFormKeys.Location] &&
                            touched[CreateFormKeys.Location] && (
                                <p className={styles['error']}>
                                    {errors[CreateFormKeys.Location]}
                                </p>
                            )}
                        <label htmlFor={CreateFormKeys.Location}></label>
                        <input
                            className={
                                errors[CreateFormKeys.Location] &&
                                touched[CreateFormKeys.Location]
                                    ? styles['landmark-title-error']
                                    : styles['landmark-title']
                            }
                            type="text"
                            name={CreateFormKeys.Location}
                            id={CreateFormKeys.Location}
                            placeholder="Location"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[CreateFormKeys.Location]}
                        />
                    </div>
                    <div className={styles['form-item']}>
                        {errors[CreateFormKeys.PostDescription] &&
                            touched[CreateFormKeys.PostDescription] && (
                                <p className={styles['error']}>
                                    {errors[CreateFormKeys.PostDescription]}
                                </p>
                            )}
                        <label htmlFor={CreateFormKeys.PostDescription}></label>
                        <textarea
                            className={
                                errors[CreateFormKeys.PostDescription] &&
                                touched[CreateFormKeys.PostDescription]
                                    ? styles['description-error']
                                    : styles['description']
                            }
                            name={CreateFormKeys.PostDescription}
                            id={CreateFormKeys.PostDescription}
                            cols="50"
                            rows="6"
                            placeholder="Post descrition... Write something about your experience there."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[CreateFormKeys.PostDescription]}
                        ></textarea>
                    </div>
                    <div className={styles['form-item']}>
                        {errors[CreateFormKeys.LandmarkDescription] &&
                            touched[CreateFormKeys.LandmarkDescription] && (
                                <p className={styles['error']}>
                                    {errors[CreateFormKeys.LandmarkDescription]}
                                </p>
                            )}
                        <label
                            htmlFor={CreateFormKeys.LandmarkDescription}
                        ></label>
                        <textarea
                            className={
                                errors[CreateFormKeys.LandmarkDescription] &&
                                touched[CreateFormKeys.LandmarkDescription]
                                    ? styles['description-error']
                                    : styles['description']
                            }
                            name={CreateFormKeys.LandmarkDescription}
                            id={CreateFormKeys.LandmarkDescription}
                            cols="50"
                            rows="6"
                            placeholder="Landmark description... Write something about the landmark."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[CreateFormKeys.LandmarkDescription]}
                        ></textarea>
                    </div>
                    <div className={styles['form-item']}>
                        {errors[CreateFormKeys.PostImage] &&
                            touched[CreateFormKeys.PostImage] && (
                                <p className={styles['error']}>
                                    {errors[CreateFormKeys.PostImage]}
                                </p>
                            )}
                        <div
                            className={
                                errors[CreateFormKeys.PostImage] &&
                                touched[CreateFormKeys.PostImage]
                                    ? styles['file-wrapper-error']
                                    : styles['file-wrapper']
                            }
                        >
                            <span className={styles['drop-title']}>
                                Drop files here
                            </span>
                            <i className="fa-solid fa-down-long"></i>
                            <label htmlFor={CreateFormKeys.PostImage}></label>
                            <input
                                className={styles['file-input']}
                                type="file"
                                name={CreateFormKeys.PostImage}
                                id={CreateFormKeys.PostImage}
                                onChange={(e) =>
                                    setFieldValue(
                                        CreateFormKeys.PostImage,
                                        e.target.files
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className={styles['form-item']}>
                        <input
                            className={styles['input-button']}
                            type="submit"
                            disabled={isSubmitting}
                            value={isSubmitting ? 'Creating...' : 'Create Post'}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}
