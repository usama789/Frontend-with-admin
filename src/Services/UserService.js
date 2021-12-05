import GenericServices from './GenericServices';
import jwtDecode from 'jwt-decode';
class UserService extends GenericServices{
    constructor(){
        super();
    }
    login = (email,password)=> new Promise((resolve,reject)=>{
        this.post("users/login",{email,password}).then((token)=>{
            localStorage.setItem("token",token);
            resolve(token);
        }).catch((err)=>{
            reject(err);
        });
    });
    Adminlogin = (email,password)=> new Promise((resolve,reject)=>{
        this.post("users/adminlogin",{email,password}).then((token)=>{
            localStorage.setItem("token",token);
            resolve(token);
        }).catch((err)=>{
            reject(err);
        });
    });
    register = (name,email,password,phone)=> this.post("users/register",{name,email,password,phone});
    verifyOtp = (email,otp)=> this.post("users/verifyotp",{email,otp});
    
    logout = ()=>{
        localStorage.removeItem("token"," ");
    }
    isLoggedIn=()=>{
       return localStorage.getItem("token") ? true : false;
    }
    getUser= ()=>{
        try {
            const jwt = localStorage.getItem("token");
            return jwtDecode(jwt);
        } catch (error) {
            return null;
        }
    }
    getSingleUser = (_id)=>{
        return this.get("users/"+ _id);

        
    }
    getUsers = ()=> this.get("users/getusers");
    deleteUser = (_id)=> this.delete("users/delete/"+_id);
    updateProfile = (id,data) => this.put("users/"+id,data);
    getlastUsers = ()=> this.get("users/getlastusers");
    getuserCount = ()=> this.get("users/countusers");
    
}
let userService = new UserService();
export default userService;