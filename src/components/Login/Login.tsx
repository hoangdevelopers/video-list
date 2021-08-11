import { Form, Input, Button, Typography } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from '../../store/auth/authAction';
import { ILoginParams } from '../../model/auth';
import { selectAuth } from "../../store/auth/authSelector";
import "./Login.less"
const Login = (props: any) => {
    const { Text } = Typography
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    console.log('auth', auth)

    const handleLogin = (values: ILoginParams) => {
        dispatch(authLogin(values))
    };

    return (
        <div>
            {auth.isLogin ?
            <div>
                <Text>Wellcom {auth.email}</Text>
                <Button>Share a movie</Button>
                <Button>Logout</Button>
            </div>
            :
            <Form
                name="login"
                initialValues={{ remember: true }}
                className="login-form"
                onFinish ={handleLogin}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className="input--group"
                >
                    <Input placeholder="email" className="input--field" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className="input--group"
                >
                    <Input.Password placeholder="password" className="input--field" />
                </Form.Item>

                <Form.Item className="input--group">
                    <Button type="primary" htmlType="submit" className="submit--btn">
                        Login
                    </Button>
                </Form.Item>
            </Form>}
        </div>
    )
}

export default Login