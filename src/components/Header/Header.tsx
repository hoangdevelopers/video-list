import { Image, Typography } from 'antd';
import Login from '../Login/Login';
import "./Header.less"

const Header = () => {
    const { Title } = Typography;
    
    return (
        <div className="header">
            <div className="header--left">
                <Image
                    preview={false}
                    width={30}
                    src="https://image.flaticon.com/icons/png/512/25/25694.png"
                />
                <Title className="title">Funny Movies</Title>
            </div>
            <div className="">
                <Login/>
            </div>
        </div>
    )
}

export default Header