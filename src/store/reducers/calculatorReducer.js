import {TOTAL_CALC} from "../actions/actionTypes";

const initialState = {
    services: [
        {
            id: 1,
            title: 'Кредит на кухню',
            description: 'Lorem ipsum dolor sit amet!',
            price: 500000
        },
        {
            id: 2,
            title: 'Кредит на хородильник',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ut!',
            price: 35000
        },
        {
            id: 3,
            title: 'Кредит на стиральную',
            description: 'Lorem ipsum dolor sit amet, Officia, ut!',
            price: 25000
        },
        {
            id: 4,
            title: 'Кредит на шкафы',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            price: 3000
        }
    ],
    total: 0
}

export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case TOTAL_CALC:
            return {
                ...state, total: action.payload
            }
        default:
            return state
    }
}