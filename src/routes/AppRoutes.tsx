import React from "react";
import { useCustomSelector } from "../hooks/useAppSelector";
import { Routes, Route, Navigate } from "react-router-dom";
import AppointmentsListPage from "../pages/AppointmentsListPage";
import {
  APPOINTMENT_DETAILS_ROUTE,
  APPOINTMENT_EDIT_ROUTE,
  APPOINTMENTS_DELETE_ROUTE,
  ENTRY_ROUTE,
} from "../constants/route";
import AppointmentsDetailsPage from "../pages/AppointmentsDetailsPage";
import AppointmentsEditPage from "../pages/AppointmentsEditPage";
import AppointmentDeletePage from "../pages/AppointmentDeletePage";

const AppRoutes = () => {
  const { isAuth } = useCustomSelector((state) => state.appointmentReducer);

  return (
    <Routes>
      <Route path={ENTRY_ROUTE} element={<AppointmentsListPage />} />
      {isAuth && (
        <>
          <Route
            path={APPOINTMENT_DETAILS_ROUTE()}
            element={<AppointmentsDetailsPage />}
          />
          <Route
            path={APPOINTMENT_EDIT_ROUTE()}
            element={<AppointmentsEditPage />}
          />
          <Route
            path={APPOINTMENTS_DELETE_ROUTE()}
            element={<AppointmentDeletePage />}
          />
        </>
      )}
      <Route path="*" element={<Navigate to={ENTRY_ROUTE} />} />
    </Routes>
  );
};

export default AppRoutes;
