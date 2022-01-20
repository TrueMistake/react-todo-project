import {TOTAL_CALC} from "./actionTypes";

export function totalCalculator(total) {
    return {
        type: TOTAL_CALC,
        payload: total
    }
}