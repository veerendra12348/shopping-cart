import axios from "axios";

export const getAllProductsService = () => {
    return axios.get('https://dummyjson.com/products');
};

export const getProductCategories = () => {
    return axios.get('https://dummyjson.com/products/categories');
};

export const getProductsByCategory= (category) => {
    return axios.get(`https://dummyjson.com/products/category/${category}`);
}
