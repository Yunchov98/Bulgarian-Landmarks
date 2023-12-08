import { endpoints } from '../environments/constants';
import * as request from '../../lib/request';

export const getAllUsers = async () => {
    const result = await request.get(endpoints.profile);

    return result;
};

export const getUserPosts = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: 'owner=_ownerId:users',
    });

    const result = await request.get(
        `${endpoints.getUserPosts(userId)}?sortBy=_createdOn%20desc&${query}`
    );

    return result;
};

export const getUserInfo = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    });
    const result = await request.get(
        `${endpoints.getCurrentUserInfo(userId)}?${query}`
    );

    return result;
};
