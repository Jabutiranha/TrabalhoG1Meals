export interface Category {
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string,
    source: Source

}

export interface Source {
    id?: string,
    name: string,
}
