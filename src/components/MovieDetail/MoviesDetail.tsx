import { Typography, Button, Row, Col } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import "./MovieDetail.less"

const MovieDetail = () => {
    const { Title, Text } = Typography;
    return(
        <div>
            <Title level={3}>Movie Title</Title>
            <Row>
                <Col span="18">
                    <Text>Shared by leanh@mail.com</Text>
                    <div>
                        <Typography className="text--inline">123 <LikeOutlined /></Typography>
                        <Typography className="text--inline">111 <DislikeOutlined /></Typography>
                    </div>
                </Col>    
                <Col span="4">
                    <Button><LikeOutlined /></Button>
                    <Button><DislikeOutlined /></Button>
                </Col>
            </Row>
            <div>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Text>
            </div>
        </div>
    )
}

export default MovieDetail;