import * as Yup from 'yup';

import {EditFormKeys} from '../../core/environments/constants'

export const editValidation = Yup.object({
    [EditFormKeys.LandmarkTitle]: Yup.string()
        .min(2, 'Minimum length of the title is 2 characters.')
        .required('Title is required.'),
    [EditFormKeys.Location]: Yup.string()
        .min(2, 'Minimum length of the location is 2 characters.')
        .required('Location is required.'),
    [EditFormKeys.PostDescription]: Yup.string()
        .min(1, 'Post description cannot be empty.')
        .required('Post description is required.'),
    [EditFormKeys.LandmarkDescription]: Yup.string()
        .min(1, 'Landmark description cannot be empty.')
        .required('Landmark description is required.'),
    [EditFormKeys.PostImage]: Yup.string().required('Image is required.'),
});