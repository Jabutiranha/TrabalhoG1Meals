import { ApiConfig } from "../../config"
import { httpClient } from "../../infra/http"
import { Category } from "../model/Category"


export const getHeadlines = async (): Promise<Category[]> => {
    const response = await httpClient.get<Category>(ApiConfig.GET_CATEGORY_MEALS)
    return response.data.articles
}
