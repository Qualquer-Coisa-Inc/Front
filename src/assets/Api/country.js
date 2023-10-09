import axios from "axios";



const Base_url = 'https://backend-mocha-tau.vercel.app/';

const url = (path) => `${Base_url}${path}`



export class Search_Country{
    static getCountries(name) {
        return axios(url(`countries/${name}`));
      };
}