import {REMOVE_POSTS, SET_POSTS} from "../actions/actionTypes";


const initialState = {
    posts: [
        {title: 'Заголовок 1', description: 'Описание', id: 1}
    ]
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts:[...state.posts, action.payload]}
        case REMOVE_POSTS:
            const filter = state.posts.filter(item => item.id !== action.payload.id);
            return {...state, posts: filter}
        default:
            return state
    }
}