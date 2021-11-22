import React, { FC, useEffect, useState } from "react";
import { Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useCustomDispatch } from "../hooks/useCustomDispatch";
import { ENTRY_ROUTE } from "../constants/routes";
import { deleteAppointmentId } from "../api";

const DeleteModal: FC = () => {
  const { setError } = useCustomDispatch();
  const [visible, setVisible] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, [params.id]);

  const handleOk = async (id: string) => {
    try {
      await deleteAppointmentId(id);
    } catch (error: any) {
      setError(error.message);
    } finally {
      navigate(ENTRY_ROUTE);
    }
  };

  const handleCancel = () => {
    navigate(-1);
    setVisible(false);
  };

  return (
    <Modal
      title="Delete appointment"
      centered
      visible={visible}
      onOk={() => handleOk(params.id as string)}
      onCancel={handleCancel}
      width={1000}
    >
      Are you sure you want to delete this appointment?
    </Modal>
  );
};

export default DeleteModal;
