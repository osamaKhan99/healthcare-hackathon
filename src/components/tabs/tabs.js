import React from 'react'
import { MdMedicalServices, MdPersonalInjury } from 'react-icons/md'
import { BsBank } from 'react-icons/bs'
import { FaProcedures } from 'react-icons/fa'
import "./tabs.css"

export default function Tabs() {

    const items = [
        {
            id: 1,
            title: "Appointments",
            icon: <MdMedicalServices size={50}/>,
            count: 213
        },
        {
            id: 2,
            title: "Patients",
            icon: <MdPersonalInjury size={50}/>,
            count: 104
        },
        {
            id: 3,
            title: "Operations",
            icon: <FaProcedures size={50}/>,
            count: 24
        },
        {
            id: 4,
            title: "Hospital Earnings",
            icon: <BsBank size={50}/>,
            count: 12174
        }
    ]
    return (
        <div className="tabs-container">
            {
                items.map((item)=>(
                    <div key={item.id} className="box">
                        <div className="icon">{item.icon}</div>
                        <div className="detail">
                            <h4>{item.title}</h4>
                            <p>{item.count}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
