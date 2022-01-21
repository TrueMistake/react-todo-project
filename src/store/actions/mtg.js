import {FETCH_ALL_CARD, FETCH_ALL_CARD_ERROR, FETCH_ALL_CARD_SUCCESS, FETCH_SUBTYPES, FETCH_TYPES} from "./actionTypes";
import axios from "axios";

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

export function promiseAllCards() {
    return async dispatch => {
        const urls = [
            'https://api.magicthegathering.io/v1/subtypes',
            'https://api.magicthegathering.io/v1/types',
            'https://api.magicthegathering.io/v1/cards'
        ]
        const request = urls.map(url => axios.get(url))
        dispatch({type: FETCH_ALL_CARD})
        try {
            Promise.all(request)
                .then(responses => responses.forEach(res => {
                    if (res.config.url === 'https://api.magicthegathering.io/v1/subtypes') {
                        return dispatch(successSubtypesCards(res.data.subtypes))
                    }
                    if (res.config.url === 'https://api.magicthegathering.io/v1/types') {
                        return dispatch(successTypesCards(res.data.types))
                    }
                    if (res.config.url === 'https://api.magicthegathering.io/v1/cards') {
                        return dispatch(successToCards(res.data))
                    }
                }))
        } catch (e) {
            dispatch({type: FETCH_SUBTYPES, payload: 'Произошла ошибка загрузки'})
        }
    }
}
