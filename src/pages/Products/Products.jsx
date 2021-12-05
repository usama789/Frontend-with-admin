import React from 'react'
import {useEffect,useState} from 'react';
import SingleProduct from './SingleProduct'
import axios from 'axios';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import productService from '../../Services/ProductService';
// import { useHistory } from "react-router-dom";
import '../../App.css';
const useStyles = makeStyles({
    mleft:{
        marginLeft: 15
    },

})

const Products = (props) => {
    const [data, setdata] = useState("");
    useEffect(async()=>{
        console.log('button pressed');
        var requestOptions = {
            method: 'GET',
            // redirect: 'follow'
          };
        
    await fetch("http://localhost:9080/crawl.json?spider_name=mega_spider&start_requests=true", requestOptions)
    .then(function(response){ return response.json(); })
    .then(function(dataa) {
       
        setdata(dataa['items'])
    })
  .catch(error => console.log('error', error));
    },[])
    
    return (
        <div className="main-product">
            <h2>Products</h2>
            <br />
            {data.length === 0 ? <p>there are no products</p> : (
                <Grid container spacing={3} >
                {Object.keys(data).map((item, i)=>(
                    // <SingleProduct key={i} product={data[i]} onDelete={getData} />
                    <SingleProduct key={i} product={data[i]} />
            ))}
            </Grid>
            )}
            
        </div>
    )
}

export default Products
