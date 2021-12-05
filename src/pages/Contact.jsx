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
import contac from '../Services/UserService';
import ChatIcon from '@material-ui/icons/Chat';
import contactService from '../Services/ContactService';
import { toast } from 'react-toastify';

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

export default function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <ChatIcon fontSize="large"/>
        <Typography component="h1" variant="h5">
          Contact Form
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
            label="Subject"
            
            value={subject}
            onChange={(e)=>{
              setSubject(e.target.value);
            }}
          />
          <TextField
            className={classes.formheight}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Message"
            value={message}
            onChange={(e)=>{
              setMessage(e.target.value);
            }}
          />
          
          <Button
            fullWidth
            variant="contained"
            
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
              contactService.addContact({name,email,subject,message}).then((data)=>{
                console.log(data);
                window.location.reload();
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