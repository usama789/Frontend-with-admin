import React from 'react'
import './Navbar.css'
import { FaUserAlt } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import userService from '../Services/UserService'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


function Navbar2(props) {
    let history = useHistory();
    return (
        <div size={30} className="navbar">
            <div style={{marginLeft:"20px"}}><h5>Techwire</h5></div>
            <div className="flex-container" >
           
           

            <MdFavoriteBorder size={28} />
            
            <div style={{marginLeft:"20px",marginRight:10}}>
            <FaUserAlt size={25}/>
                {!userService.isLoggedIn() ? (<><Button color="primary" href="/signin">Sign in</Button>
            <Button color="primary" href="/register">Register</Button> </>): (<><Button onClick={(e)=>{
                userService.logout();
                window.location.reload();
            }}>LOGOUT {userService.getUser().name + userService.getUser().role }</Button>
            <Button onClick={(e)=>{
                history.push("/updateuser/"+ userService.getUser()._id);
            }}>Edit Profile</Button>
            </>
            
            )}
            
            {/* <h5 style={{fontSize:13,fontWeight:"bold"}}><a href="/signin" style={{textDecoration:"none",color:"black"}}> Login</a></h5>
            <h5 style={{fontSize:13,fontWeight:"bold"}}><a href="/register" style={{textDecoration:"none",color:"black"}}> Register</a></h5> */}
            
            </div>
            </div>

        </div>
    )
}

export default Navbar2
