import axios from "axios";
import {baseApiUrl} from "./baseApiUrl";

export default class ProductService {
    getProducts() {
        return axios.get(baseApiUrl + "products/getall");
    };

    getByProductId(id) {
        return axios.get(baseApiUrl + "products/getproductdetailbyid?id=" + id)
    };
    getProductByCategory(id){
        return axios.get(baseApiUrl+"products/getbycategory?id=" + id)
    }
};
