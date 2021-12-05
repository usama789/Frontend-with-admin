import GenericServices from './GenericServices';
class ContactService extends GenericServices{
    constructor(){
        super();
    }
    addContact = (data)=> this.post("contact/",data);
    getCount = () => this.get("contact/count");
    getContact = () => this.get("contact/");
    deleteContact = (_id) => this.delete("contact/"+_id);
    getSingleContact = (_id) => this.get("contact/"+_id);
    
}
let contactService = new ContactService();
export default contactService;