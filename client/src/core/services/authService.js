import { endpoints } from '../environments/constants';
import * as request from '../../lib/request';

export const aboutMe = async () => {
    return await request.get(endpoints.me);
};

export const login = async (email, password) => {
    const result = await request.post(endpoints.login, { email, password });

    return result;
};

export const register = async (values) =>
    await request.post(endpoints.register, values);

export const logout = async () => request.get(endpoints.logout);

export const createProfile = async (values) =>
    await request.post(endpoints.profile, values);
