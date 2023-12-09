import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { PATH } from '../../core/environments/constants';
import { LoginFormKeys } from '../../core/environments/constants';
import styles from './Login.module.css';
import AuthContext from '../../contexts/authContext';

const initialValues = {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
};

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [serverError, setServerError] = useState('');

    const { values, handleSubmit, handleChange, handleBlur, isSubmitting } =
        useFormik({
            initialValues,
            onSubmit,
        });

    const { loginSubmitHandler } = useContext(AuthContext);

    async function onSubmit(values) {
        try {
            await loginSubmitHandler(values);
        } catch (error) {
            setServerError(error.message);
        }
    }

    const passwordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className={styles['login-section']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['heading']}>
                    <h2 className={styles['section-heading']}>Log in</h2>
                    <p className={styles['greeting']}>Welcome back!</p>
                </div>
                {serverError && (
                    <div className={styles['error-message-wrapper']}>
                        <p className={styles['error-message']}>{serverError}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit} className={styles['login-form']}>
                    <div className={styles['email-wrapper']}>
                        <div className={styles['input-wrapper']}>
                            <label htmlFor={LoginFormKeys.Email}></label>
                            <input
                                className={styles['form-input']}
                                type="text"
                                placeholder="Email"
                                name={LoginFormKeys.Email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[LoginFormKeys.Email]}
                            />
                            <i className="fa-regular fa-user"></i>
                        </div>
                    </div>
                    <div className={styles['password-wrapper']}>
                        <div className={styles['input-wrapper']}>
                            <label htmlFor={LoginFormKeys.Password}></label>
                            <input
                                className={styles['form-input']}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name={LoginFormKeys.Password}
                                onChange={handleChange}
                                value={values[LoginFormKeys.Password]}
                            />
                            <div
                                data-testid="togglePassword"
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
                    <input
                        type="submit"
                        value={isSubmitting ? 'Logging in...' : 'Sign In'}
                        className={styles['login-button']}
                        disabled={isSubmitting}
                    />
                </form>
                <p className={styles['create-account']}>
                    <Link to={PATH.register}>Create new account</Link>
                </p>
            </div>
        </section>
    );
}
