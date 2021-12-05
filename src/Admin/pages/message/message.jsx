import { Link } from "react-router-dom";
import "./message.css";
import Button from '@mui/material/Button';
import React from 'react';
import contactService from "../../../Services/ContactService";
export default function Message(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] =React.useState("");
    const [message, setMessage] =React.useState("");
    const id=props.match.params.id;

    
    React.useEffect(()=>{
        contactService.getSingleContact(id).then((data)=>{
            setName(data.name);
            setEmail(data.email);
            setSubject(data.subject);
            setMessage(data.message);
        })
    },[]);
    const handleDelete = (id) => {
        contactService.deleteContact(id).then((data)=>{
          console.log(data);
          props.location.reload();
        }
        ).catch((error)=>{
          console.log(error);
        });
      };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h3 className="productTitle">Message Detail</h3>
        
      </div>
      <div className="productTop">
          <div className="productTopLeft">
          </div>
        

          <div className="productTopRight">
          <div style={{paddingLeft: '400px'}}>
             <Button style={{color:'white',backgroundColor:'red',fontSize:'10px'}} onClick={()=> {handleDelete(id); window.location.href="/dashboard/messages"}}> Delete</Button>
          </div>

              <div className="productInfoTop">
                  <img src="https://res.cloudinary.com/dzn6xpjr0/image/upload/v1638560620/favpng_user-profile-icon-design_zp5bmh.png" alt="" className="productInfoImg" />
                  <span className="productName">{name}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Name:</span>
                      <span className="productInfoValue">{name}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Subject:</span>
                      <span className="productInfoValue">{subject}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Email:</span>
                      <span className="productInfoValue">{email}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Message</span>
                      <span className="productInfoValue">{message}</span>
                  </div>
              </div>
          </div>
         
      </div>
      
    </div>
  );
}
