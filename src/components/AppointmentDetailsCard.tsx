import { Card } from "antd";
import React, { FC } from "react";
import { Appointments } from "../types/appointmentsTypes";

const AppointmentDetailsCard: FC<Appointments> = ({
  date,
  time,
  department,
  notes,
  firstName,
  lastName,
  contact,
  status,
}) => {

  return (
    <div className="card_wrapper">
      <Card  hoverable className="card_wrapper__card cursor_off" title="General Information">
        <h2>
          Appointment date {date} {time}
        </h2>
        <h3>Department: {department}</h3>
        <h3>{notes}</h3>
      </Card>
      <Card  hoverable className="card_wrapper__card cursor_off" title="Contact information">
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
