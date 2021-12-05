import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Redirect} from 'react-router';
import Navbar2 from './components/Navbar2';
import Navbar1 from './components/Navbar';
import Home from './pages/Home'
import Footer from  './components/Footer'
import SingleProduct from './pages/Products/SingleProduct';
import Products from './pages/Products/Products';
// import NewProduct from './pages/Products/NewProduct';
import EditProduct from './pages/Products/EditProduct';
import SignIn from './pages/SignIn';
import Error from './pages/Error'
import Register from './pages/Register';
import Success from './pages/Success';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';
import Store from './pages/StoreForm';
import Aboutus from './pages/Aboutus';
import OTPBox from './pages/OtpVerify';
import UpdateUser from './pages/UpdateUser';
import AdminHome from './Admin/pages/home/Home';
import Topbar from './Admin/components/topbar/Topbar';
import Sidebar from './Admin/components/sidebar/Sidebar';
import UserList from './Admin/pages/userList/UserList';
import ProductList from './Admin/pages/productList/ProductList';
import NewProduct from './Admin/pages/newProduct/NewProduct';
import './App.css';
import Product from './Admin/pages/product/Product';
import Message from './Admin/pages/message/message';
import MessageList from './Admin/pages/messageList/messageList';
import AdminSignIn from './Admin/pages/SignIn/AdminSignin';
import User from './Admin/pages/user/User';
import StoreList from './Admin/pages/storeList/storeList';
import userService from './Services/UserService';
import StoreAdmin from './Admin/pages/store/Store'
const App = () => {
  return(
    <Router>
      {userService.isLoggedIn() && userService.getUser().role == "admin" ? (<>
      
        
        <Topbar />
        <div className="admin-container">

        
        <Sidebar />
        <Switch>
        <Route path="/" exact component={Home} />
      
        <Route path="/dashboard" exact={true} component={AdminHome} />
        <Route path="/dashboard/admin/signin" exact={true} component={AdminSignIn} />
        <Route path="/dashboard/product/:id" exact={true} component={Product} />
        <Route path="/dashboard/newproduct" exact={true} component={NewProduct} />
        <Route path="/dashboard/messages" exact={true} component={MessageList} />
        <Route path="/dashboard/messages/:id" exact={true} component={Message} />
        <Route path="/dashboard/stores" exact={true} component={StoreList} />
        <Route path="/dashboard/stores/:id" exact={true} component={StoreAdmin} />
        <Route path="/dashboard/users" exact={true} component={UserList} />
        <Route path="/dashboard/users/:id" exact={true} component={User} />
        <Route path="/dashboard/products" exact={true} component={ProductList} />
        <Route path="/not-found" exact component={Error} />
        </Switch>
        
        
        </div>
      </>) : (<>
        <Navbar2 />
        <Navbar1 />
        <Switch>
        /* user route */
        <Route path="/" exact component={Home} />
        <Route path="/about" exact  component={Products} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/store" exact component={Store} />
        <Route path="/register" exact component={Register} />
        <Route path="/updateuser/:id" exact component={UpdateUser} />
        <Route path="/verify-otp" exact component={OTPBox} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/success" exact component={Success} />
        <Route path="/product" exact component={Products} />
        

        <Redirect to="/not-found" />
          
        
        
      </Switch>
    <Footer />

      </>)}
    
    <ToastContainer />

    
   
  </Router>
  );
};
// const Dashboard = ({match}) => {
//   return(
//     <Router>
      
//       <Topbar />
//     <div className="admin-container">
//     <Sidebar />
      
    
//     <Switch>
        
//         <Route path={match.url} exact={true} component={AdminHome} />
//         <Route path={`${match.url}/admin/signin`} exact={true} component={AdminSignIn} />
//         <Route path={`${match.url}/product/:id`} exact={true} component={Product} />
//         <Route path={`${match.url}/newproduct`} exact={true} component={NewProduct} />
//         <Route path={`${match.url}/messages`} exact={true} component={MessageList} />
//         <Route path={`${match.url}/messages/:id`} exact={true} component={Message} />
//         <Route path={`${match.url}/stores`} exact={true} component={StoreList} />
//         <Route path={`${match.url}/users`} exact={true} component={UserList} />
//         <Route path={`${match.url}/users/:id`} exact={true} component={User} />
//         <Route path={`${match.url}/products`} exact={true} component={ProductList} />
//         <Route path={`${match.url}/not-found`} exact={true} component={Error} />

//         {/* <Redirect to="/not-found" /> */}
//         {/* <Route path="*" component={Error}/> */}

//         {/* <Redirect to="/not-found" /> */}
          
        
        
//       </Switch>
//       </div>
//   </Router>
//   );
// };
// function App() {
//   return (
//     <Router>
//     <Switch>
//     {/* <Route path='/dashboard' exact component={Dashboard} /> */}

//       <Route path='/' component={UserHome} />
//     </Switch>
//     <ToastContainer />
//     </Router>
//   );
// }

export default App;
