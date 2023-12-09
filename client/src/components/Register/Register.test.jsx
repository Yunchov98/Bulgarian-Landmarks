import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect } from 'vitest';

import AuthContext from '../../contexts/authContext';

import Register from './Register';

const user = { email: 'peter@abv.bg', password: '123456' };

beforeEach(() => {
    render(
        <AuthContext.Provider value={user}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </AuthContext.Provider>
    );
});

afterEach(() => {
    cleanup();
});

describe('Register Component', () => {
    it('should render register component', () => {
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByText('Add profile picture')).toBeInTheDocument();
        expect(screen.getByText('Male')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('Confirm Password')
        ).toBeInTheDocument();
    });

    it('should redirect to login', () => {
        const loginButton = screen.getByText('Sign in');

        userEvent.click(loginButton);

        expect(window.location.pathname).toEqual('/');
    });
});
