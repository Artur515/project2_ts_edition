import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAppointmentIdDetails } from "../api";
import { useCustomDispatch } from "../hooks/useCustomDispatch";
import { useCustomSelector } from "../hooks/useAppSelector";
import Loader from "../components/ui/Loader";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AppointmentDetailsCard from "../components/AppointmentDetailsCard";
import SelectStatus from "../components/SelectStatus";

const AppointmentsDetailsPage: FC = () => {
  const { setAppointmentWithId, setError, setLoading } = useCustomDispatch();
  const { isLoading, appointmentWithId } = useCustomSelector(
    (state) => state.appointmentReducer
  );
  const params = useParams();

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

  return (
    <>
      <div className="layout__box">
        <SelectStatus {...appointmentWithId} />
        <Button icon={<EditOutlined />} size="large">
          Edit
        </Button>
        <Button icon={<DeleteOutlined />} size="large">
          Delete
        </Button>
      </div>
      <AppointmentDetailsCard {...appointmentWithId} />
    </>
  );
};

export default AppointmentsDetailsPage;
