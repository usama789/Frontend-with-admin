
import * as React from 'react';
import "./storeList.css";
import { DeleteOutline, SettingsBackupRestoreSharp } from "@material-ui/icons";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import userService from '../../../Services/UserService';
import Button from '@mui/material/Button';
import storeService from '../../../Services/StoreService';
import {Link} from 'react-router-dom';

export default function StoreList() {
  const [store,setStore] = React.useState([]);
      const getData=()=>storeService.getStore().then((data)=>{
              setStore(data);
      }).catch((error)=>{
          console.log(error);
      });
      React.useEffect(getData,[]);
      const handleDelete = (id) => {
            storeService.deleteStore(id).then((data)=>{
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
            <TableCell align="right" style={{fontWeight:'bold'}}>Email</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Phone</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Location&nbsp;</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Actions&nbsp;</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {store.map((store) => (
            <TableRow
              key={store.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {store.name}
              </TableCell>
              <TableCell align="right">{store.email}</TableCell>
              <TableCell align="right">{store.phone}</TableCell>
              <TableCell align="right">{store.location}</TableCell>
            
              <TableCell align="right">
                <Link to={"/dashboard/stores/"+store._id} >
                <Button variant="contained" size="small" >Details</Button>
                </Link>
                <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(store._id)}
            /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>):
       (<><h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5></>)
      }
     
    </TableContainer>
  );
}