import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./watch.scss";
import { useLocation, Link } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  console.log(location.state);
  const { movie } = location.state;
  console.log(`this is movie ${movie}`);
  const isExternalSource = movie.video.includes(".mp4");
  console.log(isExternalSource);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          <p className="pback">Home</p>
        </div>
      </Link>
      {isExternalSource ? (
        <video className="video" autoPlay progress controls src={movie.video} />
      ) : (
        <iframe src={movie.video} frameborder="0" width="100%" height="100%" />
      )}
    </div>
  );
}
