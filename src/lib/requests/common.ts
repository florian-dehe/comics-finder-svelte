
const API_URL = "http://localhost:8000/api"

export const makePost = async function(url: string, dataToSend: unknown) {
    const res = await fetch(API_URL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    });

    return res;
}

export const fetchData = async function(url:string) {
    const res = await fetch(API_URL + url);
    return res.json();
}

export const makeDelete = async function(url:string) {
    const res = await fetch(API_URL + url, {
        method: 'DELETE'
    });

    return res;
}