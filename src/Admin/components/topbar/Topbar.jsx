import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import userService from "../../../Services/UserService";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
export default function Topbar() {
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TechWire</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          
          <img src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1638560620/favpng_user-profile-icon-design_zp5bmh.png" alt="" className="topAvatar" />
          {userService.isLoggedIn() && userService.getUser().role == "admin" ? (<> <Button variant="contained" size="small" style={{marginLeft: '5px'}} onClick={()=> {userService.logout();window.location.href="/";}}>Logout</Button></>):(<><Link to={"/dashboard/admin/signin"}><Button>Sign In</Button></Link></>)}
        </div>
      </div>
    </div>
  );
}
