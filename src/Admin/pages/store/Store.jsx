import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import Button from '@mui/material/Button';
  import React from 'react';
  
  import { Link } from "react-router-dom";
  import userService from '../../../Services/UserService';
  import storeService from "../../../Services/StoreService";
  import "./Store.css";
  
  export default function StoreAdmin(props) {
    const [name,setName]= React.useState("");
    const [email,setEmail]= React.useState("");
    const [url,setUrl]= React.useState("");
    const [location,setLocation]= React.useState("");
    const [phone,setPhone]= React.useState("");
    const id = props.match.params.id;
    const getData = ()=>{
        storeService.getSingleStore(id).then((data)=>{
          setName(data.name);
          setEmail(data.email);
          setUrl(data.url);
          setLocation(data.location);
          setPhone(data.phone);
        }).catch((err)=> console.log(err));
    }
    React.useEffect(getData);
    const handleDelete=(id)=>{
        storeService.deleteStore(id).then((data)=>{
  
        
        console.log(data);
        window.location.href="/dashboard/stores";
        }
      
        ).catch((err)=> console.log(err));
    }
    
    return (
      <div className="user">
        {userService.isLoggedIn() && userService.getUser().role == "admin" ? (<>
          <div className="userTitleContainer">
          <h3 className="userTitle">Store Details</h3>
          
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="delete">
            <Button style={{backgroundColor:'red',color:'white',fontSize:'10px'}} onClick={()=> handleDelete(id)}>Delete</Button>
            </div>
            <div className="userShowTop">
              <img
                src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1638560620/favpng_user-profile-icon-design_zp5bmh.png"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{name}</span>
                <span className="userShowUserTitle">{email}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{name}</span>
              </div>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{email}</span>
              </div>
              
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{phone}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{email}</span>
              </div>
              
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{location}</span>
              </div>
            </div>
          </div>
         
        </div>
        </>): (<> <h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5></>)}
        
      </div>
    );
  }
  