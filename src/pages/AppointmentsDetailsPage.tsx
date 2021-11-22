import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAppointmentIdDetails } from "../api";
import { useCustomDispatch } from "../hooks/useCustomDispatch";
import { useCustomSelector } from "../hooks/useAppSelector";
import Loader from "../components/ui/Loader";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AppointmentDetailsCard from "../components/AppointmentDetailsCard";
import SelectStatus from "../components/SelectStatus";
import { APPOINTMENTS_DELETE_ROUTE } from "../constants/routes";

// interface AppointmentIdParams {
//   id: string;
// }

const AppointmentsDetailsPage: FC = () => {
  const { setAppointmentWithId, setError, setLoading } = useCustomDispatch();
  const { isLoading, appointmentWithId } = useCustomSelector(
    (state) => state.appointmentReducer
  );

  const params = useParams();

  const navigate = useNavigate();

  const appointmentIdDetails = async (id: string): Promise<void> => {
    setLoading(true);
    try {
      const { data } = await getAppointmentIdDetails(id);
      setAppointmentWithId(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    appointmentIdDetails(params.id as string);
    // eslint-disable-next-line
  }, [params.id]);

  if (isLoading) {
    return <Loader />;
  }

  const handleDeleteAppointment = (id: string) => {
    navigate(APPOINTMENTS_DELETE_ROUTE(id));
  };

  return (
    <>
      <div className="layout__box">
        <SelectStatus {...appointmentWithId} />
        <Button icon={<EditOutlined />} size="large">
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteAppointment(params.id as string)}
          icon={<DeleteOutlined />}
          size="large"
        >
          Delete
        </Button>
      </div>
      <AppointmentDetailsCard {...appointmentWithId} />
    </>
  );
};

export default AppointmentsDetailsPage;
