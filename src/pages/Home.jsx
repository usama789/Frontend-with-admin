import React from 'react'
import {  Carousel } from 'react-bootstrap';
import '../App.css'

const Home = () => {
    return (
        <div className="home">
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609068389/apple1_zakwe8.jpg"
                    alt="Apple Products"
                    className="icrousel"
                    />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609068389/Phones1_iwgjam.jpg"
                    alt="Mobiles "
                    className="icrousel"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609068390/laptop1_nqbzbh.jpg"
                    alt="Laptops"
                    className="icrousel"
                    />

                
                </Carousel.Item>
            </Carousel>
            <br />
            <div className="row mt-20 cat-option">
               <div className="col-md-3 col-sm-6 col-6 ">
                   <a><img src="https://pricemeter.pk/_nuxt/img/categories.0d85a40.png" className="categories"/></a>
               </div>
               <div className="col-md-3 col-sm-6 col-6">
                   <a><img src="https://pricemeter.pk/_nuxt/img/super-deals.ce8de95.png" className="categories"/></a>
               </div>
               <div className="col-md-3 col-sm-6 col-6">
                   <a><img src="https://pricemeter.pk/_nuxt/img/blogs.33342ff.png" className="categories"/></a>
               </div>
               <div className="col-md-3 col-sm-6 col-6">
                   <a><img src="https://pricemeter.pk/_nuxt/img/news.69beaa2.png" className="categories"/></a>
               </div>

           </div>
           <br />
           <div>
              <h5 className="dealS">Collections</h5>
              <hr />
              <div className="row mt-20 cat-collection">
              <div className="col-md-3 col-sm-6 col-6 ">
                   <a><img src="https://storage.pricemeter.pk/images/page/400x400/zBJLVAGiWbNY3vS1lg03GtIlFkflBEhNCdipeuCN.jpeg" className="col-img"/></a>
               </div>
               <div className="col-md-3 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/images/page/400x400/5JWtC8pxvPjzRRtv4PslgRg8fI9DoiRNJ3wr2hcd.jpeg" className="col-img"/></a>
               </div>
               <div className="col-md-3 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/images/page/400x400/woje8I93O6mQkSl7GMWr3cwlyxqAtNlRs0xlHmmG.jpeg" className="col-img"/></a>
               </div>
               <div className="col-md-3 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/images/page/400x400/MWazkh3EfWsMtyXiosURad5NwGc75H3Dc8wu7Pet.jpeg" className="col-img"/></a>
               </div>
            </div>
          </div>
          <br />
          <div className="top-cat">
              <h5>Top Categories</h5>
              <hr />
              <div className="row mt-20 top-container">
               <div className="col-md-2 col-sm-6 col-6 ">
                   <a><img src="https://storage.pricemeter.pk/media/smart-phones-01-1-1622281288DCMOa.svg" className="topimg"/></a>
                   <h5 className="top-heading">Mobile Phones</h5>
               </div>
               <div className="col-md-2 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/media/computers-1622879276sYDMd.svg" className="topimg"/></a>
                   <h5 className="top-heading">Laptops</h5>
               </div>
               <div className="col-md-2 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/media/tv-multimedia-01-1622881873WpgWD.svg" className="topimg"/></a>
                   <h5 className="top-heading">Lcds</h5>
               </div>
               <div className="col-md-2 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/media/electronic-appliances-01-1622465733CrkKj.svg" className="topimg"/></a>
                   <h5 className="top-heading">Electronics</h5>
               </div>
               <div className="col-md-2 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/media/electronic-appliances-01-1622465733CrkKj.svg" className="topimg"/></a>
                   <h5 className="top-heading">Electronics</h5>
               </div>
               <div className="col-md-2 col-sm-6 col-6">
                   <a><img src="https://storage.pricemeter.pk/media/electronic-appliances-01-1622465733CrkKj.svg" className="topimg"/></a>
                   <h5 className="top-heading">Electronics</h5>
               </div>
               </div>
          </div>
          
        </div>
    )
}

export default Home
