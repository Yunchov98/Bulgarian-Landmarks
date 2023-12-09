import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import AuthContext from '../../contexts/authContext';

import Login from './Login';

const user = { email: 'peter@abv.bg', password: '123456' };

beforeEach(() => {
    render(
        <AuthContext.Provider value={user}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </AuthContext.Provider>
    );
});

afterEach(() => {
    cleanup();
});

describe('Login Component', () => {
    it('should render login form', () => {
        expect(screen.getByText('Sign In')).toBeInTheDocument();
        expect(screen.getByText('Create new account')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument;
    });

    it('should not return error if the username or password are right', async () => {
        const email = screen.getByPlaceholderText('Email');
        const password = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByText('Sign In');

        userEvent.type(email, 'peter@abv.bg');
        userEvent.type(password, '123456');
        userEvent.click(loginButton);

        await waitFor(() => {
            const error = screen.queryByText("Login or password don't match");

            expect(error).not.toBeInTheDocument();
            expect(window.location.pathname).toEqual('/');
        });
    });

    it('should redirect to register', async () => {
        const registerButton = screen.getByText('Create new account');

        userEvent.click(registerButton);

        expect(window.location.pathname).toEqual('/');
    });
});
