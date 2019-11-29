import Axios from 'axios';
import { GET_PRODUCT_LIST } from './APIEndpoints';

export const GETProductList = async () => {
    const response = await Axios.get(GET_PRODUCT_LIST)
    .then(response => {
        const data = response.data.map(item => {
            const {id, name, brand, preview, price} = item;
            return {id, name, brand, preview, price};
        })
        console.log('Parsed Data =>', data);
        return data;
    })
    .catch(error => {
        return Promise.reject(error);
    })

    return Promise.resolve(response);
}