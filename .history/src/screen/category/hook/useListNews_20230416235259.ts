import { useEffect, useState } from "react";

import { UseListNewsResult } from "./interface";
import { Category } from "../../../data/model";

const useListNews = (): UseListNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState<Category[]>([])

    const getHeadlines = async (): Promise<Category[]> => {
        const result = await newsService.getHeadlines()
        return result
    }

    useEffect(() => {
        const loadHeadlines = async () => {
            setIsLoading(true)
            const result = await getHeadlines()
            setIsLoading(false)
            setArticles(result)
        }

        loadHeadlines()
    }, [])


    return {
        isLoading,
        articles,
    }
}

export default useListNews