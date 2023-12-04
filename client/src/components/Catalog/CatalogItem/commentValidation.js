import { CommentForm } from '../../../core/environments/constants';
import * as Yup from 'yup';

export const commentValidation = Yup.object({
    [CommentForm.CommentArea]: Yup.string().min(1).required(),
});
