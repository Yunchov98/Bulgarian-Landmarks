import * as Yup from 'yup';

import { EditCommentKeys } from '../../../../../core/environments/constants';

export const editCommentValidation = Yup.object({
    [EditCommentKeys.EditComment]: Yup.string().required(),
});
