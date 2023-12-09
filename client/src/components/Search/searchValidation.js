import * as Yup from 'yup';

import { SearchKeys } from '../../core/environments/constants';

const searchValidation = Yup.object({
    [SearchKeys.Search]: Yup.string().required(),
});

export default searchValidation;
