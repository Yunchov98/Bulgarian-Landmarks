import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import * as postService from '../../core/services/postService';
import styles from './EditPost.module.css';
import { PATH, EditFormKeys } from '../../core/environments/constants';
import { editValidation } from './editValidation';

export default function EditPost() {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [postData, setPostData] = useState({
        [EditFormKeys.LandmarkTitle]: '',
        [EditFormKeys.Location]: '',
        [EditFormKeys.PostDescription]: '',
        [EditFormKeys.LandmarkDescription]: '',
        [EditFormKeys.PostImage]: '',
    });

    useEffect(() => {
        postService
            .getPostById(postId)
            .then((result) => {
                setPostData(result);
            })
            .catch((err) => console.log(err));
    }, [postId]);

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useFormik({
        initialValues: {
            [EditFormKeys.LandmarkTitle]:
                postData[EditFormKeys.LandmarkTitle] || '',
            [EditFormKeys.Location]: postData[EditFormKeys.Location] || '',
            [EditFormKeys.PostDescription]:
                postData[EditFormKeys.PostDescription] || '',
            [EditFormKeys.LandmarkDescription]:
                postData[EditFormKeys.LandmarkDescription] || '',
            [EditFormKeys.PostImage]: postData[EditFormKeys.PostImage] || '',
        },
        onSubmit,
        validationSchema: editValidation,
        enableReinitialize: true,
    });

    async function onSubmit(values) {
        try {
            await postService.editPost(postId, values);

            navigate(PATH.catalog);
        } catch (error) {
            console.log(errors);
            console.log(error);
        }
    }

    return (
        <section className={styles['edit-post']}>
            <div className={styles['content-wrapper']}>
                <h2 className={styles['section-heading']}>Edit Post</h2>

                <form onSubmit={handleSubmit} className={styles['edit-form']}>
                    <div className={styles['form-item']}>
                        <label htmlFor={EditFormKeys.LandmarkTitle}>
                            Landmark Title
                        </label>
                        {errors[EditFormKeys.LandmarkTitle] &&
                            touched[EditFormKeys.LandmarkTitle] && (
                                <p className={styles['error']}>
                                    {errors[EditFormKeys.LandmarkTitle]}
                                </p>
                            )}
                        <input
                            className={
                                errors[EditFormKeys.LandmarkTitle]
                                    ? styles['input-field-error']
                                    : styles['input-field']
                            }
                            type="text"
                            name={EditFormKeys.LandmarkTitle}
                            id={EditFormKeys.LandmarkTitle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[EditFormKeys.LandmarkTitle]}
                        />
                    </div>

                    <div className={styles['form-item']}>
                        <label htmlFor={EditFormKeys.Location}>Location</label>
                        {errors[EditFormKeys.Location] &&
                            touched[EditFormKeys.Location] && (
                                <p className={styles['error']}>
                                    {errors[EditFormKeys.Location]}
                                </p>
                            )}
                        <input
                            className={
                                errors[EditFormKeys.Location]
                                    ? styles['input-field-error']
                                    : styles['input-field']
                            }
                            type="text"
                            name={EditFormKeys.Location}
                            id={EditFormKeys.Location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[EditFormKeys.Location]}
                        />
                    </div>

                    <div className={styles['form-item']}>
                        <label htmlFor={EditFormKeys.PostImage}>
                            Post Image
                        </label>
                        {errors[EditFormKeys.PostImage] &&
                            touched[EditFormKeys.PostImage] && (
                                <p className={styles['error']}>
                                    {errors[EditFormKeys.PostImage]}
                                </p>
                            )}
                        <input
                            className={
                                errors[EditFormKeys.PostImage]
                                    ? styles['input-field-error']
                                    : styles['input-field']
                            }
                            type="text"
                            name={EditFormKeys.PostImage}
                            id={EditFormKeys.PostImage}
                            value={values[EditFormKeys.PostImage]}
                            disabled
                        />
                    </div>

                    <div className={styles['form-item']}>
                        <label htmlFor={EditFormKeys.PostDescription}>
                            Post Description
                        </label>
                        {errors[EditFormKeys.PostDescription] &&
                            touched[EditFormKeys.PostDescription] && (
                                <p className={styles['error']}>
                                    {errors[EditFormKeys.PostDescription]}
                                </p>
                            )}
                        <textarea
                            className={
                                errors[EditFormKeys.PostDescription]
                                    ? styles['textarea-field-error']
                                    : styles['textarea-field']
                            }
                            type="text"
                            name={EditFormKeys.PostDescription}
                            id={EditFormKeys.PostDescription}
                            cols="50"
                            rows="10"
                            onChange={handleChange}
                            value={values[EditFormKeys.PostDescription]}
                        ></textarea>
                    </div>

                    <div className={styles['form-item']}>
                        <label htmlFor={EditFormKeys.LandmarkDescription}>
                            Landmark Description
                        </label>
                        {errors[EditFormKeys.LandmarkDescription] &&
                            touched[EditFormKeys.LandmarkDescription] && (
                                <p className={styles['error']}>
                                    {errors[EditFormKeys.LandmarkDescription]}
                                </p>
                            )}
                        <textarea
                            className={
                                errors[EditFormKeys.LandmarkDescription]
                                    ? styles['textarea-field-error']
                                    : styles['textarea-field']
                            }
                            type="text"
                            id={EditFormKeys.LandmarkDescription}
                            name={EditFormKeys.LandmarkDescription}
                            cols="50"
                            rows="10"
                            onChange={handleChange}
                            value={values[EditFormKeys.LandmarkDescription]}
                        ></textarea>
                    </div>

                    <div className={styles['form-item']}>
                        <input
                            className={styles['submit-button']}
                            type="submit"
                            disabled={isSubmitting}
                            value={isSubmitting ? 'Updating...' : 'Update'}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}
