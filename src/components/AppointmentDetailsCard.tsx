import { Card } from "antd";
import React from "react";
import { Appointments } from "../types/appointmentsTypes";

const AppointmentDetailsCard = (props: Appointments) => {
  const {
    date,
    time,
    department,
    notes,
    firstName,
    lastName,
    contact,
    status,
  } = props;

  return (
    <div className="card_wrapper">
      <Card className="card_wrapper__card" title="General Information">
        <h2>
          Appointment date {date} {time}
        </h2>
        <h3>Department: {department}</h3>
        <h3>{notes}</h3>
      </Card>
      <Card className="card_wrapper__card" title="Contact information">
        <h2>
          Patient full name:{firstName} {lastName}
        </h2>
        <h3>Contact number :{contact}</h3>
        <h3>Status: {status}</h3>
      </Card>
    </div>
  );
};

export default AppointmentDetailsCard;
