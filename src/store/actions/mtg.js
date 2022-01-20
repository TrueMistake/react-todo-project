import {FETCH_ALL_CARD, FETCH_ALL_CARD_ERROR, FETCH_ALL_CARD_SUCCESS, FETCH_SUBTYPES, FETCH_TYPES} from "./actionTypes";
import axios from "axios";

export function fetchAllCards() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_ALL_CARD})
            await axios('https://api.magicthegathering.io/v1/cards')
                .then(res => {
                    return dispatch(successToCards(res.data))
                });
        } catch (e) {
            dispatch({type: FETCH_ALL_CARD_ERROR, payload:'Произошла ошибка загрузки кард'})
        }
    }
}
export function fetchTypesCards() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_TYPES})
            await axios('https://api.magicthegathering.io/v1/types')
                .then(res => {
                    return dispatch(successTypesCards(res.data.types))
                });
        } catch (e) {
            dispatch({type: FETCH_ALL_CARD_ERROR, payload:'Произошла ошибка загрузки types'})
        }
    }
}
export function fetchSubtypesCards() {
    return async dispatch => {
        try {
            dispatch({type: FETCH_TYPES})
            await axios('https://api.magicthegathering.io/v1/subtypes')
                .then(res => {
                    return dispatch(successSubtypesCards(res.data.subtypes))
                });
        } catch (e) {
            dispatch({type: FETCH_SUBTYPES, payload:'Произошла ошибка загрузки subtypes'})
        }
    }
}
export function filterCards(obj) {
    return async dispatch => {
        try {
            dispatch({type: FETCH_ALL_CARD})
            await axios(`https://api.magicthegathering.io/v1/cards?name=${obj.name}&types=${obj.types}&subtypes=${obj.subtypes}&colors=${obj.colors}`)
                .then(res => {
                    return dispatch(successToCards(res.data))
                });
        } catch (e) {
            dispatch({type: FETCH_ALL_CARD_ERROR, payload:'Произошла ошибка фильтрации'})
        }
    }
}

export function successToCards(cards) {
    return {
        type: FETCH_ALL_CARD_SUCCESS,
        payload: cards
    }
}
export function successTypesCards(types) {
    return {
        type: FETCH_TYPES,
        payload: types
    }
}
export function successSubtypesCards(subtypes) {
    return {
        type: FETCH_SUBTYPES,
        payload: subtypes
    }
}

export function errorToCards(str) {
    return {
        type: FETCH_ALL_CARD_ERROR,
        payload: str
    }
}
