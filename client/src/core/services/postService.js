import { endpoints } from '../environments/constants';
import * as request from '../../lib/request';

export const createPost = async (postData) => {
    const result = await request.post(endpoints.createPost, postData);

    return result;
};
