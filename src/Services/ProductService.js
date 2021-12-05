import GenericServices from './GenericServices';

class ProductService extends GenericServices{
    constructor(){
        super();
    }
    addProduct = (data)=> this.post("products/",data);
    deleteProduct = (_id) => this.delete("products/"+ _id);
    getProduct = () => this.get("products/");
    putProduct = (_id,data) => this.put("products/"+ _id,data);
    getSingleProduct=(_id) => this.get("products/"+_id);
}
let productService = new ProductService();
export default productService;