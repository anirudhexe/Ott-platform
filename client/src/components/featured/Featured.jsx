import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import{useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

const Featured = ({type, setGenre}) => {
  const [content, setContent] = useState({});
  
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        
        setContent(res.data[0]);
        console.log("featured content is");
        console.log(content);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
          </select>
        </div>
      )}
      {/* <img
        src={content.img}
        alt=""
      /> */}
      <video src={content.trailer} autoPlay={true} loop muted/>
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
          {content.title}
        </span>
        <div className="buttons">
        <Link to="/watch" state={{content}}>
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
        </Link> 
          <button className="more">
            <InfoIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured