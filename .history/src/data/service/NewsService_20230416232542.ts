

export const getHeadlines = async (): Promise<Article[]> => {
    const response = await httpClient.get<Headlines>(ApiConfig.GET_TOP_HEADLINES)
    return response.data.articles
}
