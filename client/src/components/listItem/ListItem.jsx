import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
      const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/" + item, {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjE3YTgzODJhYmZjMThhMTllY2U0YSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTM0NzIxNjEsImV4cCI6MTcxMzkwNDE2MX0.TBCYkr1M51b4-wHtcGYFr_PNC6sSvWl9cZX2rHH7j5A",
            },
          });
          console.log(res.data)
          setMovie(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMovie();
    }, [item]);
  
    return (
      <Link to={{pathname:'/watch', state:{movie: movie} }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie.img}
          alt=""
        />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOffAltIcon className="icon" />
                <ThumbDownOffAltIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
      </Link>
    );
}

export default ListItem