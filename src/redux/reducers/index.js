import {ADD,DECREASE} from '../actions/actionTypes'

const changeCounter = (state=0,action) => {
    switch(action.type){
        case ADD:
        return state + action.payload
        break
        case DECREASE:
        return state - action.payload
        break
        default:
        return state
    }
}


export default changeCounter