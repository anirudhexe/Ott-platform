import "./ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png" 

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [content, setcontent] = useState({});

    useEffect(() => {
      const getcontent = async () => {
        try {
          const res = await axios.get("/movies/find/" + item, {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          console.log(res.data)
          console.log(item);
          setcontent(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getcontent();
    }, [item]);
    
    return (
      <Link to="/watch" state={{content}}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content ? <img
          src={content.img}
          alt=""
        /> : <img src={logo} alt="Description of the image" />
      }
        {isHovered && (
          <>
            <video src={content.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOffAltIcon className="icon" />
                <ThumbDownOffAltIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{content.title}</span>
                <span>{content.duration}</span>
                <span className="limit">+{content.limit}</span>
                <span>{content.year}</span>
              </div>
              <div className="desc">{content.desc}</div>
              <div className="genre">{content.genre}</div>
            </div>
          </>
        )}
      </div>
      </Link>
    );
}

export default ListItem