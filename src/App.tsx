import React, { useEffect } from "react";
import { useCustomDispatch } from "./hooks/useCustomDispatch";
import { Layout, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useCustomSelector } from "./hooks/useAppSelector";
import AppRoutes from "./routes/AppRoutes";
import Login from "./google/Login";
import Logout from "./google/Logout";

const { Sider, Content } = Layout;

const App: React.FC = () => {
  const { setIsAuth } = useCustomDispatch();
  const { isAuth } = useCustomSelector((state) => state.appointmentReducer);

  useEffect(() => {
    const token = localStorage.getItem("project_token");
    if (token) {
      setIsAuth(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Layout className="layout">
      <Sider breakpoint="md" className="aside">
        {isAuth && (
          <Button
            className="aside__button__create"
            // @ts-ignore
            icon={<PlusCircleOutlined />}
            shape="circle"
          />
        )}
        {isAuth ? <Logout /> : <Login />}
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
