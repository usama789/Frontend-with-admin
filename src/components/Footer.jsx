import React from 'react';
import '../App.css';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
            <div className="row">
            {/* Column1 */}
            <div className="col">
                <h4>Techwire</h4><hr/>
                <span className="list-unstyled">
                <li><a href="./">About us</a></li>
                <li><a href="./">Contact us </a></li>
                <li><a href="./">Ceo message</a></li>
                <li><a href="./">Online Store</a></li>
                <li><a href="./">Privacy Policy</a></li>
                <li><a href="./">Terms of use</a></li>
                
                </span>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Exclusive Features</h4><hr/>
                <ui className="list-unstyled">
                <li><a href="./">Favourite item List</a></li>
                <li><a href="./">Deals & promotions</a></li>
                <li><a href="./">One click comparison</a></li>
                <li><a href="./">Real time price update</a></li>
                <li><a href="./">Terms of use</a></li>
                <li><a href="./">Terms of use</a></li>
                <li><a href="./">Terms of use</a></li>
                
                </ui>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>Latest News</h4><hr/>
                <ui className="list-unstyled">
                <li><a href="./">Iphone 13 pro max</a></li>
                <li><a href="./">Iphone 13 pro max</a></li>
                <li><a href="./">Iphone 13 pro max</a></li>
                <li><a href="./">Iphone 13 pro max</a></li>
                <li><a href="./">Iphone 13 pro max</a></li>
                
                </ui>
            </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} Techwire | All rights reserved |
                Terms Of Service | Privacy
            </p>
            </div>
        </div>
        </div>
    )
}

export default Footer
