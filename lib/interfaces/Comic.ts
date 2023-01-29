
interface Comic {
    title: string,
    description: string,
    volume: number,
    serie: Serie,
    release_date: string,
    pages: number,
    isbn: number,
    cover_url: string,
}

interface Serie {
    name: string
    collection: Collection
}

interface Collection {
    name: string,
    editor: Editor
}

interface Editor {
    name: string
}