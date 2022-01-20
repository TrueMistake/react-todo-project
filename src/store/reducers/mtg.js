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
    loadingAllCards: false,
    loadingTypes: false,
    loadingSubtypes: false,
    error: null
}

export default function mtgReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_CARD:
            return {
                ...state, loadingAllCards: true, loadingTypes: true, loadingSubtypes: true
            }
        case FETCH_ALL_CARD_SUCCESS:
            return {
                ...state, loadingAllCards: false, cards: action.payload.cards, error: null
            }
        case FETCH_ALL_CARD_ERROR:
            return {
                ...state, loadingAllCards: false, error: action.payload,
            }
        case FETCH_TYPES:
            return {
                ...state, types: action.payload, loadingTypes: false, error: null
            }
        case FETCH_SUBTYPES:
            return {
                ...state, subtypes: action.payload, loadingSubtypes: false, error: null
            }
        default:
            return state
    }
}