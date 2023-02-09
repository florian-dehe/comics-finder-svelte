
export type Comic = {
    id: number,
    title: string,
    description: string,
    volume: number,
    serie: number,
    serie_info: Serie,
    release_date: string,
    pages: number,
    isbn: number,
    cover_url: string,
    authors: number[],
    authors_info: Author[]
}

export interface Serie {
    id: number,
    name: string,
    collection: number,
    collection_info: Collection
}

export interface Collection {
    id: number,
    name: string,
    editor: number,
    editor_info: Editor
}

export interface Editor {
    id: number,
    name: string
}

export interface Author {
    id: number,
    name: string
}