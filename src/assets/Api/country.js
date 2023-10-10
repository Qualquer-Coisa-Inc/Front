import axios from "axios";

const baseURL = 'https://backend-mocha-tau.vercel.app/';

const withBaseURL = (path) => `${baseURL}${path}`


export class Country{
    static async getCountries(name) {
        return await axios(withBaseURL(`countries/${name}`));
      }
}