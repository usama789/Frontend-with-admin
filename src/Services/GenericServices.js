import axios from 'axios';
axios.defaults.baseURL="http://localhost:4000/api/";
axios.defaults.headers.common["x-auth-token"] =localStorage.getItem("token");
class GenericServices {
    constructor() {}
    get = (url)=> new Promise((resolve,reject)=>{
        axios.get(url).then((res)=>{
            resolve(res.data);
        })
        .catch((error)=>{
            reject(error);
        })
    });
    post = (url,data)=> new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>{
            resolve(res.data);
        })
        .catch((error)=>{
            reject(error);
        })
    });
    delete = (url)=> new Promise((resolve,reject)=>{
        axios.delete(url).then((res)=>{
            resolve(res.data);
        })
        .catch((error)=>{
            reject(error);
        })
    });
    put = (url,data)=> new Promise((resolve,reject)=>{
        axios.put(url,data).then((res)=>{
            resolve(res.data);
        })
        .catch((error)=>{
            reject(error);
        })
    });
}
export default GenericServices;