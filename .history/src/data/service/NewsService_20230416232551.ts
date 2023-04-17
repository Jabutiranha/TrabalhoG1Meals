import { Category } from "../model/Category"


export const getHeadlines = async (): Promise<Category[]> => {
    const response = await httpClient.get<>(ApiConfig.GET_TOP_HEADLINES)
    return response.data.articles
}
