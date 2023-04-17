import axios from "axios";
import { ApiConfig } from "../../config";

const httpClient = axios.create({ 
    baseURL: ApiConfig.NEWS_API_BASE_URL,
})

httpClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${ApiConfig.NEWS_API_KEY}`
    return config
})

export default httpClient
