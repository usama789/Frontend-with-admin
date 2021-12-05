
import React from 'react';
import "./messageList.css";
import { DeleteOutline, SettingsBackupRestoreSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import contactService from '../../../Services/ContactService';
import userService from '../../../Services/UserService';

export default function MessageList() {
  const [message,setMessage] = React.useState([]);
      const GetData=()=>contactService.getContact().then((data)=>{
              setMessage(data);
      }).catch((error)=>{
          console.log(error);
      });
      React.useEffect(GetData,[]);
      const handleDelete = (id) => {
            contactService.deleteContact(id).then((data)=>{
              console.log(data);
              window.location.reload();
            }
            ).catch((error)=>{
              console.log(error);
            });
          };
  return (
    <TableContainer component={Paper} className="userList">
        {userService.isLoggedIn() && userService.getUser().role == "admin" ? (
            <>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'bold'}}>Name</TableCell>
            <TableCell align="right" style={{fontWeight:'bold'}}>Email</TableCell>
            <TableCell align="right"  style={{fontWeight:'bold'}}>Subject</TableCell>
            {/* <TableCell align="right">Status&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell> */}
            <TableCell align="right" style={{fontWeight:'bold'}}>Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {message.map((message) => (
            <TableRow
              key={message.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {message.name}
              </TableCell>
              <TableCell align="right">{message.email}</TableCell>
              <TableCell align="right">{message.subject}</TableCell>
              {/* <TableCell align="right">{user.status}</TableCell>
              <TableCell align="right">{user.phone}</TableCell> */}
              <TableCell align="right">
              <Link to={"/dashboard/messages/" + message._id}>
              <button className="productListEdit">Details</button>
            </Link>
                <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(message._id)}
            /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </>
        ): (<><h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5></>)}
      
    </TableContainer>
  );
}