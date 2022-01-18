import {REMOVE_POSTS, SET_POSTS} from "./actionTypes";

export function createTodo(post) {
    return {
        type: SET_POSTS,
        payload: post
    }
}

export function removeTodo(post) {
    return {
        type: REMOVE_POSTS,
        payload: post
    }
}