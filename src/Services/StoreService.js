import GenericServices from './GenericServices';
class StoreService extends GenericServices{
    constructor(){
        super();
    }
    addStore = (data)=> this.post("store/",data);
    getStore = () => this.get("store/getrecords");
    deleteStore = (_id) => this.delete("store/"+_id);
    getSingleStore =(_id)=> this.get("store/"+_id);
    getStoreCount = ()=> this.get("store/getcount");
    
}
let storeService = new StoreService;
export default storeService;