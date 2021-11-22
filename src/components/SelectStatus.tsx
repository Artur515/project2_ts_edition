import React from "react";
import { Select } from "antd";
import { statusList } from "../constants/select";
import { Appointments } from "../types/appointmentsTypes";
import { changeAppointmentStatus } from "../api";
import { useCustomDispatch } from "../hooks/useCustomDispatch";

const { Option } = Select;

const SelectStatus = (props: Appointments) => {
  const { setError, setAppointmentWithId } = useCustomDispatch();

  const changeAppointmentStatusApi = async (appointments: Appointments) => {
    try {
      const { data } = await changeAppointmentStatus(appointments);
      setAppointmentWithId(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleChangeStatus = async (value: string) => {
    const updateAppointmentId = { ...props, status: value };
    await changeAppointmentStatusApi(updateAppointmentId);
  };

  return (
    <Select
      onChange={handleChangeStatus}
      defaultValue={props.status}
      size="large"
      className="layout__box__select"
      placeholder="Select Status"
    >
      {statusList.slice(1).map((option: string, index: number) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default SelectStatus;
