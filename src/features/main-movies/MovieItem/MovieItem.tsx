import React from "react";
import { Row, Col } from "antd";
import { IMovie } from "../../../model/movie";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
import MovieDetail from "../MovieDetail/MoviesDetail";
import "./MovieItem.less"
export interface IMovieProps {
  movie: IMovie;
  onLike: (id: string) => void;
  onDisLike: (id: string) => void;
}
const MovieItem: React.FC<IMovieProps> = (props) => {
  const { movie } = props;
  return (
    <Row className="movie-item">
      <Col span="11" className="">
        <VideoPlayer src={movie.src} poster={movie.poster || ''} type={movie.type} />
      </Col>

      <Col span="12" offset="1">
        <MovieDetail
          title={movie.title}
          sharedBy={movie.sharedBy}
          like={movie.like}
          disLike={movie.disLike}
          description={movie.description}
          onLike={() => {
            props.onLike(movie.id)
          }}
          onDisLike={() => {
            props.onDisLike(movie.id)
          }}
        />
      </Col>
    </Row>
  );
};

export default MovieItem;
