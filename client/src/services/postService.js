import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/posts';

export const getAllPosts = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const createPost = async (postData) => {
    const result = await request.post(baseUrl, postData);

    return result;
};
