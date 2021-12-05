import React,{useState,useEffect} from 'react';
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
import userService from '../Services/UserService';
import { toast } from 'react-toastify';
import decode from 'jwt-decode';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const UpdateUser = (props) =>{
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const id=props.match.params.id;
  console.log(id);
  useEffect(() => {
    userService.getSingleUser(id).then((data) => {
   
    setEmail(data.email);
    setUsername(data.name);
    setPhone(data.phone);
    }).catch((e)=>console.log(e));
}, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update User
        </Typography>
        <form className={classes.form} >
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Name"
            type="string"
            value={name}
            onChange={(e)=>{
              setUsername(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
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
            label="Password"
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone"
            type="string"
            value={phone}
            onChange={(e)=>{
              setPhone(e.target.value);
            }}
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
              userService.updateProfile(id,{email,name,phone,password}).then((data)=> {console.log(data); props.history.push("/");})
              .catch((err)=> {toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT
              });});
            }}
          >
            Update 
          </Button>
          
        
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/store" variant="body2">
                {"Want to register store?"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />

    </Container>
  );
}
export default UpdateUser;