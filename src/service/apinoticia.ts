import axios from 'axios';

export const apinoticia = axios.create({
    baseURL: "http://intranet.tjrn.jus.br/apinoticia/",
});