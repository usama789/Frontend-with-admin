import React from 'react';
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
import axios from 'axios';
import productService from '../../Services/ProductService';
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

export default function EditProduct(props) {
  const classes = useStyles();
  const [name, setname] = React.useState("");
  const [price, setprice] = React.useState(0);
  const [url, seturl] =React.useState("");

  const id=props.match.params.id;
  React.useEffect(()=>{
      productService.getSingleProduct(id).then((data)=>{
          setname(data.name);
          setprice(data.price);
          seturl(data.url);
      })
  },[]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <h3>EDIT PRODUCT FORM</h3>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoFocus
            value={name}
            onChange={(e)=>setname(e.target.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Price"
            label="price"
            type="string"
            id="price"
            value={price}
            onChange={(e)=>setprice(e.target.value)}
        
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="url"
            label="url"
            value={url}
            onChange={(e)=> seturl(e.target.value)}
        
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>{
                productService.putProduct(id,{name,price,url}).then((data)=> console.log(data)).
                catch((err)=> console.log(err));
            }
            }
          >
            Submit
          </Button>
         
        </form>
      </div>
    
    </Container>
  );
}
