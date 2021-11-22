export interface Appointments {
  id?: number;
  firstName?: string;
  lastName?: string;
  date?: string;
  time?: string;
  department?: string;
  status?: string;
  notes?: string;
  contact?: string;
}

export interface AppointmentsState {
  authentication: null | string;
  isAuth: boolean;
  isLoading: boolean;
  errorMessage: null | string;
  appointmentWithId: null | object;
  appointments: Array<Appointments>;
}

export interface AppointmentProps {
  appointment: Appointments;
}
