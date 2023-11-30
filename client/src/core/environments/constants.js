export const baseUrl = 'http://localhost:3030/';

export const PATH = {
    home: '/',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    createPost: '/create-post',
    catalog: '/catalog',
};

export const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    createPost: 'data/posts',
};

export const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Avatar: 'avatar',
    BornDate: 'bornDate',
    Gender: 'gender',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
};

export const CreateFormKeys = {
    LandmarkTitle: 'landmarkTitle',
    Location: 'location',
    PostDescription: 'postDescription',
    LandmarkDescription: 'landmarkDescription',
    PostImage: 'postImage',
};

export const tokenName = 'accessToken';
