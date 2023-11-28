import * as Yup from 'yup';

import { RegisterFormKeys } from '../../core/environments/constants';

const passwordRulse = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const today = new Date();

const registerValidation = Yup.object({
    [RegisterFormKeys.Email]: Yup.string()
        .min(6, 'Email must be at least 6 characters long')
        .required('Enter your email')
        .email('Invalid email'),
    [RegisterFormKeys.Username]: Yup.string()
        .min(5, 'Username must be at least 5 characters long')
        .required('Enter username'),
    [RegisterFormKeys.Avatar]: Yup.string().required('Image is required'),
    [RegisterFormKeys.BornDate]: Yup.date()
        .required('Enter born date')
        .max(today, 'Invalid date'),
    [RegisterFormKeys.Password]: Yup.string()
        .min(5, 'Password must be at least 5 characters long')
        .required('Enter your password')
        .matches(
            passwordRulse,
            'Password must have at least 1 upper case letter, 1 lower case letter and 1 numeric digit'
        ),
    [RegisterFormKeys.ConfirmPassword]: Yup.string()
        .min(5, 'Confrim password must be at least 5 characters long')
        .oneOf(
            [Yup.ref(RegisterFormKeys.Password), null],
            'Passwords miss match'
        )
        .required('Confrim your password'),
});

export default registerValidation;
