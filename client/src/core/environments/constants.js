export const baseUrl = 'http://localhost:3030/';

export const PATH = {
    home: '/',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    catalog: '/posts',
    edit: 'posts/edit/:postId',
    createPost: '/create-post',
    success: '/success',
    editPost: (postId) => `/posts/edit/${postId}`,
};

export const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    createPost: 'data/posts',
    getPosts: 'data/posts',
    getPostById: (postId) => `data/posts/${postId}`,
    editPost: (postId) => `data/posts/${postId}`,
    deletePost: (postId) => `data/posts/${postId}`,
    createComment: 'data/comments',
    getAllComments: 'data/comments',
    editComment: (commentId) => `data/comments/${commentId}`,
    deleteComment: (commentId) => `data/comments/${commentId}`,
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

export const EditFormKeys = {
    LandmarkTitle: 'landmarkTitle',
    Location: 'location',
    PostDescription: 'postDescription',
    LandmarkDescription: 'landmarkDescription',
    PostImage: 'postImage',
};

export const CommentForm = {
    CommentArea: 'commentArea',
};

export const CommentActions = {
    CreateComment: 'CREATE_COMMENT',
    GetAllComment: 'GET_ALL_COMMENTS',
    EditComment: 'EDIT_COMMENT',
    DeleteComment: 'DELETE_COMMENT',
};

export const EditCommentKeys = {
    EditComment: 'editComment',
};

export const tokenName = 'accessToken';
