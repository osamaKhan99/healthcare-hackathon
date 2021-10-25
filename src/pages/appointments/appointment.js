import React, { useState, useEffect } from "react";
import AppointmentContainer from "../../components/Container/appointmentContainer";
import Pagination from "../../components/pagintaion/pagination";
import "./appointment.css";
import { getAllAppointments } from "../../Redux/action";
import { BsPersonFill } from "react-icons/bs";
import { connect } from "react-redux"

function Appointments(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const t = getAllAppointments();
    setData(t.payload);
  }, []);

  return (
    <div className="appt-box">
      <h1 className="heading">Appointments</h1>

      <div className="container">
        <Pagination
          data={data}
          RenderComponent={AppointmentContainer}
          pageLimit={2}
          dataLimit={8}
          query={props.query}
        />
      </div>
      <button
        onClick={() => window.alert("Button is under development")}
        className="appt-btn"
      >
        <BsPersonFill className="btn-icon" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Appointments);
