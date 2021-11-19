import React from "react";
import { useGoogleLogout } from "react-google-login";
import { Button } from "antd";
import { useCustomDispatch } from "../hooks/useCustomDispatch";
import { LogoutOutlined } from "@ant-design/icons";

const clientId: any = process.env.REACT_APP_CLIENT_ID;

const Logout = () => {
  const { setIsAuth, setError } = useCustomDispatch();

  const onLogoutSuccess = () => {
    setIsAuth(false);
    localStorage.removeItem("project_token");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
    setError("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button
      onClick={() => signOut()}
      className="aside__button__auth"
      shape="circle"
      // @ts-ignore*/
      icon={<LogoutOutlined />}
    />
  );
};

export default Logout;
