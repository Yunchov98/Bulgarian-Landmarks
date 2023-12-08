export const baseUrl = 'http://localhost:3030/';

export const PATH = {
    home: '/',
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    catalog: '/posts',
    edit: '/posts/edit/:postId',
    createPost: '/create-post',
    success: '/success',
    editPost: (postId) => `/posts/edit/${postId}`,
    profile: '/users/:userId',
    userProfile: (userId) => `/users/${userId}`,
};

export const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
    profile: 'data/profiles',
    getCurrentUserInfo: (userId) => `data/profiles/${userId}`,
    getUserPosts: (userId) => `data/posts/${userId}`,
    createPost: 'data/posts',
    getPosts: 'data/posts',
    getPostById: (postId) => `data/posts/${postId}`,
    editPost: (postId) => `data/posts/${postId}`,
    deletePost: (postId) => `data/posts/${postId}`,
    createComment: 'data/comments',
    getAllComments: 'data/comments',
    editComment: (commentId) => `data/comments/${commentId}`,
    deleteComment: (commentId) => `data/comments/${commentId}`,
    likePost: 'data/likes',
    getCurrentPostLikes: (postId) => `data/likes/${postId}`,
    removeLike: (likeId) => `data/likes/${likeId}`,
    canLike: (postId, userId) =>
        `data/likes?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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
