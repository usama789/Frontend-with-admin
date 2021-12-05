import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import React from 'react';
import productService from "../../../Services/ProductService";
import userService from "../../../Services/UserService";
import { toast } from 'react-toastify';
import Button from '@mui/material/Button'
export default function Product(props) {
    const [name, setname] = React.useState("");
    const [price, setprice] = React.useState(0);
    const [url, seturl] =React.useState("");
    const [detail, setDetail] =React.useState("");
    const id=props.match.params.id;

    
    React.useEffect(()=>{
        productService.getSingleProduct(id).then((data)=>{
            setname(data.name);
            setprice(data.price);
            seturl(data.url);
            setDetail(data.detail);
        })
    },[]);
    
  return (
    <div className="product">
        {userService.isLoggedIn() && userService.getUser().role == "admin" ? (<>
            <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={"/dashboard/newproduct"}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={url} alt="" className="productInfoImg" />
                  <span className="productName">{name}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">{price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Image Url:</span>
                      <a className="productInfoValue">{url}</a>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Details:</span>
                      <span className="productInfoValue">{detail}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                 
                   <label>Product Price</label>
                  <input type="text" value={price} onChange={(e)=>setprice(e.target.value)} />
                   <label>Product Image Url</label>
                  <input type="text" value={url}  onChange={(e)=>seturl(e.target.value)}/>
                  <label>Product Details </label>
                  <input type="text" value={detail}  onChange={(e)=>setDetail(e.target.value)}/>
              </div>
              <div className="productFormRight">
                  
                  <Button  variant="contained" onClick={(e)=>{
                productService.putProduct(id,{name,price,url,detail}).then((data)=> {
                    
                    console.log(data);
                    window.location.href="/dashboard/products"
                   
                }).
                catch((err)=> {
                    toast.error(err.response.data, {
                        position: toast.POSITION.TOP_LEFT
                      });
                });
            }
            }>Update</Button>
              </div>
          </form>
      </div>
        </>): (<>
            <h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5>
        </>)}
      
    </div>
  );
}
