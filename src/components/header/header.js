import React from 'react'
import "./header.css";
import { NavLink } from 'react-router-dom';
import { BsFillBellFill } from 'react-icons/bs';
import Search from '../utils/search';

export default function Header() {
    return (
        <div className="header">
           <div className="topbar">
                <div className="header-left">
                    <div className="logo">
                        <img className="logoimg" src="https://www.pngitem.com/pimgs/m/47-479890_medicine-pills-background-png-image-medicine-png-transparent.png" alt="logo"/>
                        <h2 className="logotitle">HealthCare</h2>
                    </div>
                    <Search/>
                </div>
                <div className="header-right">
                    <div className="notify-bell">{<BsFillBellFill size={25}/>}</div>
                    <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM0o_5tIn0DAmbB2wKS4GvurHctTwxD5om2vi4NOsj1ODDSGULrviZ-QV3ul8JYEMfO0&usqp=CAU" alt="profileimage"/>
                </div>
           </div>
           <div className="navigation">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/appointments">Appointments</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/departments">Departments</NavLink>
                <NavLink to="/patients">Patients</NavLink>
                <NavLink to="/payments">Payments</NavLink>
                <div>|</div>
                <NavLink to="/">Service pages</NavLink>
                <NavLink to="/help">Help</NavLink>
           </div>
        </div>
    )
}
