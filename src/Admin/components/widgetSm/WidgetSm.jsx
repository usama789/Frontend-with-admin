import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React from 'react';
import userService from "../../../Services/UserService";
import { Link } from "react-router-dom";

export default function WidgetSm() {
  const [data,setData] = React.useState([]);
  const getData=()=>{
      userService.getlastUsers().then((data)=>{
        setData(data);
      }).catch((err)=> console.log(err));
  }
  React.useEffect(getData,[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {data.map((data)=> (
          <li className="widgetSmListItem">
          <img
            src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1638560620/favpng_user-profile-icon-design_zp5bmh.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{data.name}</span>
            <span className="widgetSmUserTitle">{data.status}</span>
          </div>
          <Link className="link" to={"/dashboard/users/"+data._id}>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
          </Link>
        </li>
        ))}
        
        
       
        
        
      </ul>
    </div>
  );
}
