import { ApiConfig } from "../../config"
import { httpClient } from "../../infra/http"
import { Category } from "../model/Category"
import { Categories } from "../model/Headline"


export const getHeadlines = async (): Promise<Category[]> => {
    const response = await httpClient.get<Categories>(ApiConfig.GET_TOP_HEADLINES)
    return response.data.articles
}
