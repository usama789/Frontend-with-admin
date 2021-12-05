
import * as React from 'react';
import "./userList.css";
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
import {Link} from 'react-router-dom';

export default function UserLsit() {
  const [users,setUsers] = React.useState([]);
      const getData=()=>userService.getUsers().then((data)=>{
              setUsers(data);
      }).catch((error)=>{
          console.log(error);
      });
      React.useEffect(getData,[]);
      const handleDelete = (id) => {
            userService.deleteUser(id).then((data)=>{
              window.location.reload();
              console.log(data);
              
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
            <TableCell align="right" style={{fontWeight:'bold'}}>Role</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Email</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Status&nbsp;</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Phone&nbsp;</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.role}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">
                <Link to={"/dashboard/users/"+user._id} >
                <Button variant="contained" size="small" >Details</Button>
                </Link>
                <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(user._id)}
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