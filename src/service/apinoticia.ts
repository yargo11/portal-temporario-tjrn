import axios from 'axios';

export const apinoticia = axios.create({
    baseURL: "http://localhost:8080/apinoticia/",
});