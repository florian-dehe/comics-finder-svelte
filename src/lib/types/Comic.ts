
export type Comic = {
    id: number,
    title: string,
    description: string,
    volume: number,
    serie: Serie,
    release_date: string,
    pages: number,
    isbn: number,
    cover_url: string,
    authors: Author[]
}

interface Serie {
    serie_name: string
    collection: Collection
}

interface Collection {
    name: string,
    editor: Editor
}

interface Editor {
    name: string
}

interface Author {
    id: number,
    name: string
}