import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTk5OTI0ZTcxM2YxOTU1MDJiYjlkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTM3MTgzNSwiZXhwIjoxNzE1ODAzODM1fQ.Ubc6fdq6cZyOhWqcqpa83vHOXKX-lUuZZ8DMFh-_nYw",
          },
        });
        console.log(res);
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
      {newUsers.map((user) => (
        <li className="widgetSmListItem">
          <img
            src={
              user.profilePic ||
              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}
