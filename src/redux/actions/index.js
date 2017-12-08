import {ADD,DECREASE} from './actionTypes'

export const doAdd = (num) => {
    return {
        type: ADD,
        payload: num
    }
}

export const doDecrease = (num) => {
    return {
        type: DECREASE,
        payload: num
    }
}