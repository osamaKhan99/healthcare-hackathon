import data from '../db.json'
import { getAppointments } from './actionTypes'

export function getAllAppointments(){
    return {
        type: getAppointments,
        payload: data
    }
}