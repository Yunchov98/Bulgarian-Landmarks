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

export const getPostById = async (postId) => {
    const result = await request.get(endpoints.getPostById(postId));

    return result;
};

export const editPost = async (postId, postData) => {
    const result = await request.put(endpoints.editPost(postId), postData);

    return result;
};

export const deletePost = async (postId) => {
    return await request.remove(endpoints.deletePost(postId));
};

export const addLike = async (postId) => {
    const result = await request.post(endpoints.likePost, { postId });

    return result;
};

export const getAllLikes = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`,
        load: 'owner=_ownerId:users',
    });

    const result = await request.get(`${endpoints.likePost}?${query}`);

    return result;
};

export const canLike = async (postId, userId) => {
    return request.get(endpoints.canLike(postId, userId));
};

export const getCurrentLike = async (postId, ownerId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`,
        load: `owner=${ownerId}`,
    });

    const result = await request.get(
        `${endpoints.getCurrentPostLikes(postId)}?${query}`
    );

    return result;
};

export const removeLike = async (likeId) => {
    return await request.remove(endpoints.removeLike(likeId));
};
