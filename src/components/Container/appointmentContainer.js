import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import "./container.css";

function AppointmentContainer(props) {

  const renderHeader = () => {
    let headerElement = [
      "name",
      "email",
      "date",
      "visit time",
      "doctors",
      "condtions",
      "",
    ];

    return headerElement.map((key, index) => {
      return (
        <th className="table-head" key={index}>
          {key}
        </th>
      );
    });
  };

  const renderBody = () => {
    if (props.query) {
      // eslint-disable-next-line array-callback-return
      props.data.filter((item) => {
          if (item.name.toLowerCase().includes(props.query)) {
            return item;
          }
        })
        .map((item) => {
          return (
            <tr key={item.id}>
              <td className="table-row">{item.name}</td>
              <td className="table-row">{item.email}</td>
              <td className="table-row">{item.date}</td>
              <td className="table-row">{item.time}</td>
              <td className="table-row">{item.doctor}</td>
              <td className="table-row">{item.conditions}</td>
              <td>
                <span>
                  <BsFillPencilFill className="pen-icon" />{" "}
                  <MdDeleteOutline className="bin-icon" />
                </span>
              </td>
            </tr>
          );
        });
    }
    return (
      props.data &&
      props.data.map(({ id, name, email, date, time, doctor, conditions }) => {
        return (
          <tr key={id}>
            <td className="table-row">{name}</td>
            <td className="table-row">{email}</td>
            <td className="table-row">{date}</td>
            <td className="table-row">{time}</td>
            <td className="table-row">{doctor}</td>
            <td className="table-row">{conditions}</td>
            <td>
              <span>
                <BsFillPencilFill className="pen-icon" />{" "}
                <MdDeleteOutline className="bin-icon" />
              </span>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="row">{renderHeader()}</tr>
        </thead>
        <tbody className="bodyrow">{renderBody()}</tbody>
      </table>
    </div>
  );
}
export default AppointmentContainer;
