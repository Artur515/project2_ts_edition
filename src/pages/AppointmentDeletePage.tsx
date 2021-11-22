import React, { FC } from "react";
import DeleteModal from "../components/DeleteModal";
import AppointmentDetailsCard from "../components/AppointmentDetailsCard";
import {useCustomSelector} from "../hooks/useAppSelector";


const AppointmentDeletePage: FC = () => {
    const { appointmentWithId } = useCustomSelector(
        (state) => state.appointmentReducer
    );

  return (
    <div className='delete_page'>
      <AppointmentDetailsCard {...appointmentWithId} />
      <DeleteModal />
    </div>
  );
};

export default AppointmentDeletePage;
