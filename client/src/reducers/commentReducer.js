import { CommentActions } from '../core/environments/constants';

const commentReducer = (state, action) => {
    switch (action?.type) {
        case CommentActions.GetAllComment:
            return [...action.payload];
        case CommentActions.CreateComment:
            return [...state, action.payload];
        case CommentActions.EditComment:
            return state.map((c) =>
                c._id === action.payload._id
                    ? { ...c, text: action.payload.tex }
                    : c
            );
        default:
            return state;
    }
};

export default commentReducer;