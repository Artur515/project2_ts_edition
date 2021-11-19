import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appointments } from "../../types/appointmentsTypes";
import { AppointmentsState } from "../../types/appointmentsTypes";

const initialState: AppointmentsState = {
  authentication: localStorage.getItem("project_token"),
  isAuth: false,
  appointments: [],
  appointmentWithId: null,
  errorMessage: null,
  isLoading: false,
};

const appointmentToolkitSlice = createSlice({
  name: "Appointments",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setAuthentication(state, action: PayloadAction<string>) {
      state.authentication = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    setAppointmentList(state, action: PayloadAction<Array<Appointments>>) {
      state.appointments = action.payload;
    },
    setAppointmentWithId(state, action: PayloadAction<object>) {
      state.appointmentWithId = action.payload;
    },
  },
});

export default appointmentToolkitSlice.reducer;

export const Actions = { ...appointmentToolkitSlice.actions };