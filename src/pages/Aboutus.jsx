import React,{useEffect,useState} from 'react';

import Button from '@restart/ui/esm/Button';

const Aboutus = () => {
    const [data, setdata] = useState("");
    useEffect(async()=>{
        console.log('button pressed');
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        
    await fetch("http://localhost:9080/crawl.json?spider_name=mega_spider&start_requests=true", requestOptions)
    .then(function(response){ return response.json(); })
    .then(function(dataa) {
       
        setdata(dataa['items'])
    })
  .catch(error => console.log('error', error));
    },[])
       


    
    return (
        Object.keys(data).map((item, i) => (
            // console.log(data[i]['Name'])
            // console.log(i)
            // console.log(i);
            <div className="product" >
                <h1 className="input-label">{ data[i]['Name'] }</h1>
                <h3 className="price">{ data[i]['Price'] }</h3>
                <img className="image" src={ data[i]['Images'] } ></img>
            </div>
        ))
    )
}

export default Aboutus
