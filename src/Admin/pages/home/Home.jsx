import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import userService from "../../../Services/UserService";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    buttonsign:{
      color: 'black',
      backgroundColor: 'lightblue',
      fontSize: '12px',
      marginLeft: '420px'

    },
}));
export default function AdminHome() {
  const classes = useStyles();

  return (
    <div className="home">
      {userService.isLoggedIn() && userService.getUser().role == "admin" ? 
      (<>
        <FeaturedInfo />
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <div className="homeWidgets">
        <WidgetSm/>
        {/* <WidgetLg/> */}
      </div>
      </>):(<><h5 style={{position:'relative',marginTop:'200px',marginLeft:'350px',color:'red'}}>Please login as a admin</h5>
      <Link to={"/dashboard/admin/signin"}><Button style={{marginLeft: '420px',color:'black',backgroundColor: 'lightblue',textDecoration:'none'}}>Sign In</Button></Link></>)

      }
      
    </div>
  );
}
