import { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/authSelector";
import { fetchMovies } from "../../store/movies/moviesAction";
import { selectMovies } from "../../store/movies/moviesSelector";
import { disLikeMovies, likeMovies } from "../../store/movies/moviesSlice";
import MoviesList from "./MoviesList/MoviesList";

export const MainMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const auth = useSelector(selectAuth)
  const onLike = useMemo(() => (id: string) => {
    if (!auth || !auth.email) return
    dispatch(likeMovies({movieId: id, user: auth.email}));
  }, [auth, movies])

  const onDisLike = useMemo(() => (id: string) => {
    if (!auth || !auth.email) return
    dispatch(disLikeMovies({movieId: id, user: auth.email}));
  }, [auth, movies])

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <div>
      <MoviesList
        movies={movies}
        onLike={onLike}
        onDisLike={onDisLike}
      />
    </div>
  );
};
