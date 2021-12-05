import {React,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StoreIcon from '@material-ui/icons/Store';
import storeService from '../Services/StoreService';
import { toast } from 'react-toastify';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function Store(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <StoreIcon fontSize="large"/>
        <Typography component="h1" variant="h5">
          Store Registration
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e)=>{
              setName(e.target.value);
            }}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Url"
            value={url}
            onChange={(e)=>{
              setUrl(e.target.value);
            }}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone"
            
            value={phone}
            onChange={(e)=>{
              setPhone(e.target.value);
            }}
          />
          <TextField
            className={classes.formheight}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Location"
            value={location}
            onChange={(e)=>{
              setLocation(e.target.value);
            }}
          />
          
          <Button
            fullWidth
            variant="contained"
            
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
              storeService.addStore({name,url,email,phone,location}).then((data)=>{
                console.log(data);
                // window.location.reload();
                props.history.push("/success");

              }).catch((err)=>{
                  toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });
              })
            }}
          >
            Submit
          </Button>
          
        </form>
      </div>
      <br />
      <br />
    </Container>
  );
}