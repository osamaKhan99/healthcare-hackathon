import React, {useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import Appointment from '../../pages/appointments/appointment'

export default function Search() {
    const [query, setQuery] = useState("")

    return (
        <div className="search">
            <div>{<BsSearch/>}</div>
            <input className="Searchbar" type="text" placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/>
            <div style={{visibility: 'hidden'}}>
                <Appointment query={query}/>
            </div>
        </div>
    )
}
