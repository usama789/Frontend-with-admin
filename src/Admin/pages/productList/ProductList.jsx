
import * as React from 'react';
import "./productList.css";
import { DeleteOutline, SettingsBackupRestoreSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import productService from '../../../Services/ProductService';
import userService from '../../../Services/UserService';


export default function ProductList() {
  const [products,setProducts] = React.useState([]);
      const getData=()=>productService.getProduct().then((data)=>{
              setProducts(data);
      }).catch((error)=>{
          console.log(error);
      });
      React.useEffect(getData,[]);
      const handleDelete = (id) => {
            productService.deleteProduct(id).then((data)=>{
              console.log(data);
              window.location.reload();
            }
            ).catch((error)=>{
              console.log(error);
            });
          };
  return (
    <TableContainer component={Paper} className="userList">
      {userService.isLoggedIn() && userService.getUser().role == "admin" ? (<>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'bold'}}>Name</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Price</TableCell>
            {/* <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell> */}
            <TableCell align="right" style={{fontWeight:'bold'}}>Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              {/* <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              <TableCell align="right">{user.phone}</TableCell> */}
              <TableCell align="right">
              <Link to={"/dashboard/product/" + product._id}>
              <button className="productListEdit">Edit</button>
            </Link>
                <DeleteOutline
              className="userListDelete"
              onClick={() => {handleDelete(product._id); window.location.reload();}}
            /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>): (<>
        <h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5>
      </>)}
      
    </TableContainer>
  );
}