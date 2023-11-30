import * as Yup from 'yup';

import { CreateFormKeys } from '../../core/environments/constants';

export const createValidation = Yup.object({
    [CreateFormKeys.LandmarkTitle]: Yup.string()
        .min(2, 'Minimum length of the title is 2 characters.')
        .required('Title is required.'),
    [CreateFormKeys.Location]: Yup.string()
        .min(2, 'Minimum length of the location is 2 characters.')
        .required('Location is required.'),
    [CreateFormKeys.PostDescription]: Yup.string()
        .min(1, 'Post description cannot be empty.')
        .required('Post description is required.'),
    [CreateFormKeys.LandmarkDescription]: Yup.string()
        .min(1, 'Landmark description cannot be empty.')
        .required('Landmark description is required.'),
    [CreateFormKeys.PostImage]: Yup.string().required('Image is required.'),
});
