import * as Yup from 'yup';

export const editCommentValidation = Yup.object({
    editComment: Yup.string().required(),
});
