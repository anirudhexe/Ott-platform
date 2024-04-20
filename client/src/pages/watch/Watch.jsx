
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./watch.scss";
import { useLocation, Link } from 'react-router-dom';

export default function Watch() {
  const location=useLocation();
  console.log(location.state)
  const movie=location.state.movie;
  return (
      <div className="watch">
        <Link to="/">

        <div className="back">
          <ArrowBackIcon />
          <p className='pback'>Home</p>
        </div>
        <video
          className="video"
          autoPlay
          progress
          controls
          src={movie.video}
          />
      </Link>
    </div>
  );
}
