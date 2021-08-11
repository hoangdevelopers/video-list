import { Row, Col } from 'antd';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import MovieDetail from "../MovieDetail/MoviesDetail";

const MovieItem = () => {
    return(
        <Row className="movie-item">
            <Col span="11" className="">
                <VideoPlayer />
            </Col>

            <Col span="12" offset="1">
                <MovieDetail />
            </Col>
        </Row>
    )
}

export default MovieItem;