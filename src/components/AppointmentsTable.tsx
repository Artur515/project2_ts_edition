import React, { FC, useEffect } from "react";
import { Select, Table } from "antd";
import { useCustomSelector } from "../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { APPOINTMENT_DETAILS_ROUTE } from "../constants/route";
import { useCustomDispatch } from "../hooks/useCustomDispatch";
import { getAllAppointments } from "../api";
import Loader from "./ui/Loader";
import { departmentList, statusList } from "../constants/select";

const { Column, ColumnGroup } = Table;
const { Option } = Select;

const AppointmentsTable: FC = () => {
  const { isAuth, isLoading, appointments } = useCustomSelector(
    (state) => state.appointmentReducer
  );

  const { setAppointmentList, setLoading, setError } = useCustomDispatch();
  const navigate = useNavigate();

  const getAppointments = async () => {
    setLoading(true);
    try {
      const { data } = await getAllAppointments();
      setAppointmentList(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAppointments();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="layout__box">
        <Select
          size="large"
          className="layout__box__select"
          placeholder="Select Department"
        >
          {departmentList.map((option: string, index: number) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
        <Select
          size="large"
          className="layout__box__select"
          placeholder="Select Status"
        >
          {statusList.map((option: string, index: number) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>

      <Table
        onRow={(record) => {
          return {
            onClick: (event) => {
              isAuth && navigate(APPOINTMENT_DETAILS_ROUTE(String(record.id)));
            },
          };
        }}
        // @ts-ignore
        rowClassName={(index) => index && isAuth && "cursor"}
        rowKey="id"
        dataSource={appointments}
        scroll={{ x: 400 }}
        className="content"
      >
        <ColumnGroup title="Patient name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <ColumnGroup title="Appointment date">
          <Column title="Date" dataIndex="date" key="date" />
          <Column title="Time" dataIndex="time" key="time" />
        </ColumnGroup>
        <Column title="Department" dataIndex="department" key="department" />
        <Column title="Status" dataIndex="status" key="status" />
      </Table>
    </>
  );
};

export default AppointmentsTable;
