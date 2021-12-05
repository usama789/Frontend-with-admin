import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid } from '@material-ui/core';
import productService from '../../Services/ProductService';
// import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    marginLeft:20,
    height: 300,
    width: 300,
  },
});

const SingleProduct = (props) => {
  const {product,onDelete,history} = props;
  console.log(props);
    const classes = useStyles();
    
    const [isHovered, setHover] = useState(false);
    return (
        <Grid item xs={4}>
     
     <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={product.Images}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" font-size= "12px">
        {product.Name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h7">
        {product.Price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={product['Product Url']}>Buy</Button>
        <Button size="small">Add to Favourite</Button>
      </CardActions>
    </Card>
        </Grid>
    )
}

export default withRouter(SingleProduct);
