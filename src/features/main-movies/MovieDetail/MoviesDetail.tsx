import { Typography, Button, Row, Col } from "antd";
import { LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled } from "@ant-design/icons";
import "./MovieDetail.less";
import { selectAuth } from "../../../store/auth/authSelector";
import { useSelector } from "react-redux";

export interface IMovieDetailProps {
  title: string;
  sharedBy: string;
  like: string[];
  disLike: string[];
  description: string;
  onLike: () => void;
  onDisLike: () => void;
}
const MovieDetail: React.FC<IMovieDetailProps> = (props) => {
  const { Title, Text } = Typography;
  const auth = useSelector(selectAuth);
  return (
    <div>
      <Title level={3}>{props.title}</Title>
      <Row>
        <Col span="18">
          <Text>Shared by {props.sharedBy}</Text>
          <div>
            <Typography className="text--inline">
              {props.like.length} <LikeOutlined />
            </Typography>{" "}
            <Typography className="text--inline">
              {props.disLike.length} <DislikeOutlined />
            </Typography>
          </div>
        </Col>
        {auth.isLogin && (
          <Col span="6">
            {!props.like.includes(auth.email) &&
              !props.disLike.includes(auth.email) && (
                <div>
                  <Button
                    onClick={() => {
                      props.onLike();
                    }}
                    disabled={
                      !auth || !auth.email || props.like.includes(auth.email)
                    }
                  >
                    <LikeOutlined />
                  </Button>
                  <Button
                    onClick={() => {
                      props.onDisLike();
                    }}
                    disabled={
                      !auth || !auth.email || props.disLike.includes(auth.email)
                    }
                  >
                    <DislikeOutlined />
                  </Button>
                </div>
              )}
              {
                  props.like.includes(auth.email) && <LikeFilled />
              }
              {
                  props.disLike.includes(auth.email) && <DislikeFilled />
              }
          </Col>
        )}
      </Row>
      <div>
        <Text>{props.description}</Text>
      </div>
    </div>
  );
};

export default MovieDetail;
