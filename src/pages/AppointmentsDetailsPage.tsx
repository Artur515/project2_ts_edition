import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAppointmentIdDetails } from "../api";
import { useCustomDispatch } from "../hooks/useCustomDispatch";
import { useCustomSelector } from "../hooks/useAppSelector";
import Loader from "../components/ui/loader/Loader";
import { Select } from "antd";
import { statusList } from "../constants/select";

const { Option } = Select;

const AppointmentsDetailsPage = () => {
  const { setAppointmentWithId, setError, setLoading } = useCustomDispatch();
  const { isLoading } = useCustomSelector((state) => state.appointmentReducer);
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
    </>
  );
};

export default AppointmentsDetailsPage;
