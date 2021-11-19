import React, {useEffect} from 'react';
import {useCustomDispatch} from "./hooks/useCustomDispatch";
import {Layout, Select, Button} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {departmentList, statusList} from "./constants/select";
import {useCustomSelector} from "./hooks/useAppSelector";
import AppRoutes from "./routes/AppRoutes";
import Login from "./google/Login";
import Logout from "./google/Logout";

const {Sider, Content} = Layout;
const {Option} = Select;


const App = () => {
    const {setIsAuth} = useCustomDispatch()
    const {isAuth} = useCustomSelector(state => state.appointmentReducer)


    useEffect(() => {
        const token = localStorage.getItem('project_token')
        if (token) {
            setIsAuth(true)
        }
// eslint-disable-next-line
    }, [])

    return (
        <Layout className='layout'>
            <Sider breakpoint="md" className='aside'>
                {isAuth && <Button className='aside__button__create'
                    // @ts-ignore
                                   icon={<PlusCircleOutlined/>}
                                   shape="circle"/>}
                {isAuth ? <Logout/> : <Login/>}
            </Sider>
            <Layout>
                <div className='layout__box'>
                    <Select
                        size='large'
                        className='layout__box__select'
                        placeholder="Select Department">
                        {departmentList.map((option: string, index: number) =>
                            <Option key={index} value={option}>{option}</Option>)}
                    </Select>
                    <Select
                        size='large'
                        className='layout__box__select'
                        placeholder="Select Status">
                        {statusList.map((option: string, index: number) =>
                            <Option key={index} value={option}>{option}</Option>)}
                    </Select>
                </div>
                <Content>
                    <AppRoutes/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
