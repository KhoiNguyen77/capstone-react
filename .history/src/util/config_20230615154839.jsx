import axios from "axios";
import { customNavigate } from "..";
export const DOMAIN = 'https://shop.cyberlearn.vn/'


export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000
})

http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response?.status == 400) {
        window.alert(err.response.message);
    }
})