import axios from "axios";
import { Appointments } from "../types/appointmentsTypes";

const instance = axios.create({
  baseURL: `http://localhost:3001/data`,
});

export const getAllAppointments = () => {
  return instance.get("");
};

export const getAppointmentIdDetails = (id: string) => {
  return instance.get(`/${id}`);
};

export const deleteAppointmentId = (id: string) => {
  return instance.delete(`/${id}`);
};

export const changeAppointmentStatus = (appointment: Appointments) => {
  return instance.put(`/${appointment.id}`, appointment);
};

export const addNewAppointment = (appointmentData: Appointments) => {
  return instance.post("", appointmentData);
};

export const editAppointment = (id: string, appointmentData: Appointments) => {
  return instance.patch(`/${id}`, appointmentData);
};
