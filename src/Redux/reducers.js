import { combineReducers } from "redux"
import { getAppointments } from "./actionTypes"

const initialState = {}

export const reducer = (state= initialState,action) => {
    switch(action.type){
        case getAppointments:
            return { ...state, data: action.payload}
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    rootReducer: reducer
})

//export type rootReducer = ReturnType<typeof store.getState>