import {
    FETCH_ALL_CARD,
    FETCH_ALL_CARD_ERROR,
    FETCH_ALL_CARD_SUCCESS,
    FETCH_SUBTYPES,
    FETCH_TYPES
} from "../actions/actionTypes";


const initialState = {
    cards:[],
    types: [],
    subtypes: [],
    loading: false,
    error: null
}

export default function mtgReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_CARD:
            return {
                ...state, loading: true
            }
        case FETCH_ALL_CARD_SUCCESS:
            return {
                ...state, loading: false, cards: action.payload.cards, error: null
            }
        case FETCH_ALL_CARD_ERROR:
            return {
                ...state, loading: false, error: action.payload,
            }
        case FETCH_TYPES:
            return {
                ...state, types: action.payload, error: null
            }
        case FETCH_SUBTYPES:
            return {
                ...state, subtypes: action.payload, loading: false, error: null
            }
        default:
            return state
    }
}