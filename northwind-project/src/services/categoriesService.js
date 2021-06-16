import axios from "axios";
import {baseApiUrl} from "./baseApiUrl";

export default class CategoriesService {
    getCategories() {
        return axios.get(baseApiUrl + "categories/getall");
    }
}
