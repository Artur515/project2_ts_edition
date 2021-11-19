import React from 'react';
import {Table} from 'antd';
import {Appointments} from "../types/appointmentsTypes";
import {useCustomSelector} from "../hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import {APPOINTMENT_DETAILS_ROUTE} from "../constants/route";

const {Column, ColumnGroup} = Table;


const mockData: Appointments[] = [{
    id: 1,
    firstName: "Barbara",
    lastName: "Wick Junior",
    date: "20-12-2006",
    time: "11:37",
    department: "Orthopedics",
    status: "Pending",
    notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quo?",
    contact: "8003459019"
}, {
    id: 2,
    firstName: "Barbara",
    lastName: "Wick Junior",
    date: "20-12-2006",
    time: "11:37",
    department: "Orthopedics",
    status: "Pending",
    notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quo?",
    contact: "8003459019"
}
]


const AppointmentsTable = () => {
    const {isAuth} = useCustomSelector(state => state.appointmentReducer)
    const navigate = useNavigate()





    return (
        <Table
            onRow={(record) => {
                return {
                    onClick: event => {
                        isAuth && navigate(APPOINTMENT_DETAILS_ROUTE(String(record.id)))
                    }
                };
            }}
            // @ts-ignore
            rowClassName={(index) => index && isAuth && 'cursor'}
            rowKey="id" dataSource={mockData} scroll={{x: 400}} className='content'>
            <ColumnGroup title="Patient name">
                <Column title="First Name" dataIndex="firstName" key="firstName"/>
                <Column title="Last Name" dataIndex="lastName" key="lastName"/>
            </ColumnGroup>
            <ColumnGroup title="Appointment date">
                <Column title="Date" dataIndex="date" key="date"/>
                <Column title="Time" dataIndex="time" key="time"/>
            </ColumnGroup>
            <Column title="Department" dataIndex="department" key="department"/>
            <Column title="Status" dataIndex="status" key="status"/>
        </Table>
    );
};

export default AppointmentsTable;