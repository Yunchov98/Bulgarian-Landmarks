import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { toBase64 } from '../../utils/base64';
import * as postService from '../../services/postService';

import styles from './CreatePost.module.css';
import dateConverter from '../../utils/dateConverter';

export default function CreatePost() {
    const navigate = useNavigate();

    const form = useForm({ mode: 'onBlur' });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = async (data) => {
        data.createdAt = dateConverter();

        try {
            data.file = await toBase64(data.file[0]);
            await postService.createPost(data);

            navigate('/catalog');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles['create-post']}>
            <div className={styles['content-wrapper']}>
                <h2>Create Post</h2>
                <form
                    className={styles['create-form']}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={styles['form-item']}>
                        <textarea
                            {...register('description', {
                                required: 'Description is required',
                            })}
                            name="description"
                            id="description"
                            cols="50"
                            rows="6"
                            placeholder="Write some description here..."
                        ></textarea>
                        <p className={styles['error']}>
                            {errors.description?.message}
                        </p>
                    </div>
                    <div className={styles['form-item']}>
                        <div className={styles['file-wrapper']}>
                            <span className={styles['drop-title']}>
                                Drop files here
                            </span>
                            <i className="fa-solid fa-down-long"></i>
                            <input
                                className={styles['file-input']}
                                {...register('file', {
                                    required: 'Image is required',
                                    minLength: 1,
                                })}
                                type="file"
                                name="file"
                                id="file"
                            />
                        </div>
                        <p className={styles['error']}>
                            {errors.file?.message}
                        </p>
                    </div>

                    <div className={styles['form-item']}>
                        <button>Create Post</button>
                    </div>
                </form>
                <DevTool control={control} />
            </div>
        </section>
    );
}
