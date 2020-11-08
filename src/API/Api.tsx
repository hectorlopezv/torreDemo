import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://thingproxy.freeboard.io/fetch/https://torre.bio/api/bios/hectorvmlopez',
    timeout: 1000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true,
    
  });

export const fetchTest = () => {
  const baseURL = 'https://yacdn.org/proxy/https://torre.bio/api'


return fetch(baseURL + '/bios/hectorvmlopez').then(res => res.json());
}