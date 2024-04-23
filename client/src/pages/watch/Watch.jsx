
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./watch.scss";
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Watch() {
  const location=useLocation();
  console.log(location.state)
  const {movie}=location.state;
  console.log(`this is movie ${movie}`);
  // let [searchParams]=useSearchParams();
  // const [movie, setMovie] = useState({});
  // const movieId = searchParams.get('movie');
  // const getMovie = async () => {
  //   try {
  //       const res = await axios.get(`/movies/find/${movieId}`, {
  //           headers: { Token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjE3YTgzODJhYmZjMThhMTllY2U0YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTM0NzIxNjEsImV4cCI6MTcxMzkwNDE2MX0.TBCYkr1M51b4-wHtcGYFr_PNC6sSvWl9cZX2rHH7j5A` },
  //         });
  //       setMovie(res.data);
  //       console.log(movie);
  //   } catch (err) {
  //       console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   getMovie();
  // }, [])
  
  return (
      <div className="watch">
        <Link to="/">

        <div className="back">
          <ArrowBackIcon />
          <p className='pback'>Home</p>
        </div>
        </Link>
        <video
          className="video"
          autoPlay
          progress
          controls
          src={movie.video}
          />
    </div>
  );
}
