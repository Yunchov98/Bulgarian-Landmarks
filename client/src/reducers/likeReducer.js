const likeReducer = (state, action) => {
    switch (action?.type) {
        case 'getLikes':
            return [...action.payload];
        case 'addLike':
            return [...state, action.payload];
        case 'removeLike':
            return state.filter((like) => like._id !== action.payload._id);
    }
};

export default likeReducer;
