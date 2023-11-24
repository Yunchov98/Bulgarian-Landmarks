import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

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
                <form className={styles['login-form']}>
                    <div className={styles['email-wrapper']}>
                        <input
                            className={styles['form-input']}
                            type="text"
                            placeholder="Email"
                        />
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className={styles['password-wrapper']}>
                        <input
                            className={styles['form-input']}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                        />
                        <div
                            onClick={passwordVisibilityToggle}
                            className={styles['show-hide-password-button']}
                        >
                            {showPassword ? (
                                <i className="fa-regular fa-eye"></i>
                            ) : (
                                <i class="fa-regular fa-eye-slash"></i>
                            )}
                        </div>
                    </div>
                    <button className={styles['login-button']}>Sign In</button>
                </form>
                <p className={styles['create-account']}>
                    <Link to={'/register'}>Create new account</Link>
                </p>
            </div>
        </section>
    );
}
