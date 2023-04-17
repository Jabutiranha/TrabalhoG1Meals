import { ApiConfig } from "../../config"
import { httpClient } from "../../infra/http"
import { Category } from "../model/Category"


export const getHeadlines = async (): Promise<Category[]> => {
    const response = await httpClient.get<Ca>(ApiConfig.GET_TOP_HEADLINES)
    return response.data.articles
}
