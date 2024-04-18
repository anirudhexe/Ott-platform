
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./watch.scss";
import { useLocation } from 'react-router-dom';

export default function Watch() {
  const location=useLocation();
  const movie=location.movie;
  return (
    <div className="watch">
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
    </div>
  );
}
