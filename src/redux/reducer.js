import DISHES from '../Components/data/dishes';
import COMMENTS from '../Components/data/comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS
}

export const Reducer = (state = initialState, action) => {
    return state;
}