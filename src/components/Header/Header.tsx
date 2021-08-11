import { Image, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import "./Header.less"

const Header = () => {
    const { Title } = Typography;
    
    return (
        <div className="header">
            <Link to="/" className="header--left">
                <Image
                    preview={false}
                    width={30}
                    src="https://image.flaticon.com/icons/png/512/25/25694.png"
                />
                <Title className="title">Funny Movies</Title>
            </Link>
            <div className="">
                <Login/>
            </div>
        </div>
    )
}

export default Header