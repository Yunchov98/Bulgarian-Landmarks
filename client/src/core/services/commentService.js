import { endpoints } from '../environments/constants';
import * as requset from '../../lib/request';

export const createComment = async (postId, commentData) => {
    const result = await requset.post(endpoints.createComment, {
        postId,
        commentData,
    });

    return result;
};

export const getAllComments = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`,
        load: 'owner=_ownerId:users',
    });

    const result = await requset.get(`${endpoints.getAllComments}?${query}`);

    return result;
};

export const deleteComment = async (commentId) => {
    return await requset.remove(endpoints.deleteComment(commentId));
};
