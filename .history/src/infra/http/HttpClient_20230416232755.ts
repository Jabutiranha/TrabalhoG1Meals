import axios from "axios";
import { ApiConfig } from "../../config";

const httpClient = axios.create({ 
    baseURL: ApiConfig.MEALS_API_BASE_URL,
})

httpClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${ApiConfig.MEALS_API_KEY}`
    return config
})

export default httpClient
