import "./newProduct.css";
import React from 'react';
import productService from "../../../Services/ProductService";
import { useHistory } from "react-router";
import userService from "../../../Services/UserService";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';

export default function NewProduct() {
  const [name, setname] = React.useState("");
  const [price, setprice] = React.useState(0);
  const [url, seturl] =React.useState("");
  const [detail, setDetail] =React.useState("");
  return (
    <div className="newProduct">
      {userService.isLoggedIn() && userService.getUser().role == "admin" ? (<>
        <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e)=> setname(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="Enter Price" value ={price} onChange={(e)=> setprice(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Image Url</label>
          <input type="text" placeholder="Enter Url" value ={url} onChange={(e)=> seturl(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Image Url</label>
          <input type="text" placeholder="Enter Detail" value ={detail} onChange={(e)=> setDetail(e.target.value)}/>
        </div>
        <Button variant="contained" onClick={(e)=>{
                productService.addProduct({name,price,url,detail}).then((data)=> {
                  console.log(data);
                  window.location.href="/dashboard/products"

                }).catch((err)=>{
                  toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });
              });
                
                
            }}
            >Create</Button>
      </form>
      </>): (<><h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5></>)}
      
    </div>
  );
}
