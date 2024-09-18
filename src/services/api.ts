import axios, { AxiosResponse } from "axios";
import {GetImages} from "../types"

const API_KEY = 'axsWnDI86Ppb5KXjMtUDGQynz8jWRm0VwL6eTdYJFeE';
axios.defaults.baseURL = 'https://api.unsplash.com/'; 
axios.defaults.params ={
    orientation: 'landscape',
    per_page: 12,
    client_id: API_KEY,
};

export const getImages = async (query: string, page: number): Promise<GetImages> => {
    const {data}:  AxiosResponse<GetImages>= await axios.get(`search/photos`, {
        params: {
          query,
          page,  
        }
      });
     return data;
}