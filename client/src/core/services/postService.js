import { endpoints } from '../environments/constants';
import * as request from '../../lib/request';

export const createPost = async (postData) => {
    const result = await request.post(endpoints.createPost, postData);

    return result;
};

export const getAllPosts = async () => {
    const query = new URLSearchParams({
        load: 'owner=_ownerId:users',
    });

    const result = await request.get(`${endpoints.getPosts}?${query}`);

    return result;
};
