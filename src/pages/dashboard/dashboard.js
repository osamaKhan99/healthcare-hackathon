import React, {useEffect, useState} from 'react'
import Tabs from '../../components/tabs/tabs'
import HospitalSurvey from '../../components/Charts/hospitalSurvey'
import Income from '../../components/Charts/income'
import WeekIncome from '../../components/Charts/weekIncome'
import './dashboard.css'
import AppointmentContainer from '../../components/Container/appointmentContainer'
import { getAllAppointments } from '../../Redux/action'

export default function Dashboard() {

    const [posts, setPost] = useState([])

    useEffect(()=>{
        const t =getAllAppointments()
        setPost(t.payload)
    },[])

    return (
        <div>
            <Tabs/>
            <div className="charts">
                <HospitalSurvey />
                <div className="line-charts">
                    <Income/>
                    <WeekIncome/>
                </div>
            </div>
            <div className="appt-activity">
                <h2>Appointment Activity</h2>
                <AppointmentContainer data={posts.slice(0,5)}/>
            </div>
        </div>
    )
}
