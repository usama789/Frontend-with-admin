import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import userService from "../../../Services/UserService";
import contactService from "../../../Services/ContactService";
import storeService from "../../../Services/StoreService";
import React from 'react';

export default function FeaturedInfo() {
  const [count,setCount] = React.useState(0);
  const [message,setMessage] = React.useState(0);
  const [store,setStore] = React.useState(0);
  const getData = () =>{
    userService.getuserCount().then((data)=>{
      setCount(data);
    }).catch((err)=> console.log(err));
  }
  React.useEffect(getData,[]);
 
  React.useEffect(()=>{
    contactService.getCount().then((data)=>{
      setMessage(data);
    }).catch((err)=> console.log(err));
  },[]);
  React.useEffect(()=>{
    storeService.getStoreCount().then((data)=>{
      setStore(data);
    }).catch((err)=> console.log(err));
  },[]);
  // React.useEffect(getContact,[]);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Registered Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{color: 'green'}}>{count}</span>
          
        </div>
        <span className="featuredSub"></span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Messages</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{color: 'green'}}>{message}</span>
          
            <ArrowUpward className="featuredIcon"/>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Store Request</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{color: 'green'}}>{store}</span>
          <ArrowUpward className="featuredIcon"/>
        </div>
      </div>
    </div>
  );
}
