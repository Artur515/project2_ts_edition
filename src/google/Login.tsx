import React from 'react';
import {useGoogleLogin} from "react-google-login";
import {Button} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";
import {useCustomDispatch} from "../hooks/useCustomDispatch";


// const clientId = "58079689875-mk3ptqpcpsipqlmkv45dmk4nqf6paevo.apps.googleusercontent.com"


const clientId:any = process.env.REACT_APP_CLIENT_ID

const Login = () => {
    const {setIsAuth, setError} = useCustomDispatch()


    const onSuccess = (res:any) => {
        localStorage.setItem('project_token', "Bearer " + res.tokenId)
        setIsAuth(true)
    }


    const onFailure = (res:string) => {
        setError(res)
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });


    return (<Button onClick={() => signIn()}
                    className='aside__button__auth'
                    shape="circle"
        // @ts-ignore
                    icon={<GooglePlusOutlined/>}/>)
};

export default Login;