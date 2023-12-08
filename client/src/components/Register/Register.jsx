import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { PATH, RegisterFormKeys } from '../../core/environments/constants';
import { toBase64 } from '../../utils/base64';
import styles from './Register.module.css';
import registerValidation from './registerValidation';
import AuthContext from '../../contexts/authContext';

const initialValues = {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Username]: '',
    [RegisterFormKeys.Avatar]: '',
    [RegisterFormKeys.BornDate]: '',
    [RegisterFormKeys.Gender]: 'male',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.ConfirmPassword]: '',
};

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfrimPassword, setShowConfirmPassword] = useState(false);

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
    } = useFormik({
        initialValues,
        validationSchema: registerValidation,
        onSubmit,
    });

    const { registerSubmitHandler, createUserProfileHandler } =
        useContext(AuthContext);

    async function onSubmit(values) {
        values.avatar = await toBase64(values.avatar[0]);

        await registerSubmitHandler(values);

        await createUserProfileHandler(values);
    }

    const passwordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

    const confirmPasswordVisibilityToggle = () => {
        setShowConfirmPassword(!showConfrimPassword);
    };

    return (
        <section className={styles['register-section']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['section-header']}>
                    <h2 className={styles['section-heading']}>Register</h2>
                    <p className={styles['greeting']}>
                        It's fast, easy and free.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={styles['register-form']}
                >
                    <div className={styles['email-wrapper']}>
                        {errors[RegisterFormKeys.Email] &&
                            touched[RegisterFormKeys.Email] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.Email]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.Email] &&
                                touched[RegisterFormKeys.Email]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <label htmlFor={RegisterFormKeys.Email}></label>
                            <input
                                className={styles['form-input']}
                                type="text"
                                name={RegisterFormKeys.Email}
                                id="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[RegisterFormKeys.Email]}
                            />
                            <i className="fa-regular fa-user"></i>
                        </div>
                    </div>

                    <div className={styles['username-wrapper']}>
                        {errors[RegisterFormKeys.Username] &&
                            touched[RegisterFormKeys.Username] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.Username]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.Username] &&
                                touched[RegisterFormKeys.Username]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <label htmlFor={RegisterFormKeys.Username}></label>
                            <input
                                className={styles['form-input']}
                                type="text"
                                name={RegisterFormKeys.Username}
                                id="username"
                                placeholder="Username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[RegisterFormKeys.Username]}
                            />
                            <i className="fa-regular fa-user"></i>
                        </div>
                    </div>
                    <div className={styles['avatar-wrapper']}>
                        {errors[RegisterFormKeys.Avatar] &&
                            touched[RegisterFormKeys.Avatar] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.Avatar]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.Avatar] &&
                                touched[RegisterFormKeys.Avatar]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <div className={styles['avatar-content-wrapper']}>
                                <label
                                    className={styles['fileLabel']}
                                    htmlFor={RegisterFormKeys.Avatar}
                                >
                                    Add profile picture
                                </label>
                                <input
                                    className={styles['form-input']}
                                    type="file"
                                    name={RegisterFormKeys.Avatar}
                                    id={RegisterFormKeys.Avatar}
                                    onChange={(e) =>
                                        setFieldValue(
                                            RegisterFormKeys.Avatar,
                                            e.target.files
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles['age-wrapper']}>
                        {errors[RegisterFormKeys.BornDate] &&
                            touched[RegisterFormKeys.BornDate] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.BornDate]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.BornDate] &&
                                touched[RegisterFormKeys.BornDate]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <label htmlFor={RegisterFormKeys.BornDate}></label>
                            <input
                                className={styles['form-input']}
                                type="date"
                                name={RegisterFormKeys.BornDate}
                                id="bornDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[RegisterFormKeys.BornDate]}
                            />
                        </div>
                    </div>
                    <div className={styles['gender-wrapper']}>
                        {errors[RegisterFormKeys.Gender] &&
                            touched[RegisterFormKeys.Gender] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.Gender]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.Gender] &&
                                touched[RegisterFormKeys.Gender]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <label htmlFor={RegisterFormKeys.Gender}></label>
                            <select
                                className={styles['form-input']}
                                name="gender"
                                id="gender"
                                onChange={handleChange}
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles['password-wrapper']}>
                        {errors[RegisterFormKeys.Password] &&
                            touched[RegisterFormKeys.Password] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.Password]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.Password] &&
                                touched[RegisterFormKeys.Password]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <label htmlFor={RegisterFormKeys.Password}></label>
                            <input
                                className={styles['form-input']}
                                type={showConfrimPassword ? 'text' : 'password'}
                                name={RegisterFormKeys.Password}
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[RegisterFormKeys.Password]}
                            />
                            <div
                                onClick={confirmPasswordVisibilityToggle}
                                className={styles['show-hide-password-button']}
                            >
                                {showConfrimPassword ? (
                                    <i className="fa-regular fa-eye"></i>
                                ) : (
                                    <i className="fa-regular fa-eye-slash"></i>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles['confirm-password-wrapper']}>
                        {errors[RegisterFormKeys.ConfirmPassword] &&
                            touched[RegisterFormKeys.ConfirmPassword] && (
                                <p className={styles['error-message']}>
                                    {errors[RegisterFormKeys.ConfirmPassword]}
                                </p>
                            )}
                        <div
                            className={
                                errors[RegisterFormKeys.ConfirmPassword] &&
                                touched[RegisterFormKeys.ConfirmPassword]
                                    ? styles['input-wrapper-error']
                                    : styles['input-wrapper']
                            }
                        >
                            <label
                                htmlFor={RegisterFormKeys.ConfirmPassword}
                            ></label>
                            <input
                                className={styles['form-input']}
                                type={showPassword ? 'text' : 'password'}
                                name={RegisterFormKeys.ConfirmPassword}
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[RegisterFormKeys.ConfirmPassword]}
                            />
                            <div
                                onClick={passwordVisibilityToggle}
                                className={styles['show-hide-password-button']}
                            >
                                {showPassword ? (
                                    <i className="fa-regular fa-eye"></i>
                                ) : (
                                    <i className="fa-regular fa-eye-slash"></i>
                                )}
                            </div>
                        </div>
                    </div>
                    <label htmlFor="submitButton"></label>
                    <input
                        className={
                            isSubmitting
                                ? styles['register-button-disable']
                                : styles['register-button']
                        }
                        name="submitButton"
                        type="submit"
                        value="Register"
                        disabled={isSubmitting}
                    />
                </form>
                <p className={styles['sign-in']}>
                    Already have an account?{' '}
                    <Link to={PATH.login}>Sign in</Link>
                </p>
            </div>
        </section>
    );
}
