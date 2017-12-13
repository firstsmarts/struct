import 'whatwg-fetch'

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

const parseJSON = (response) => {
    return response.json();
}

export const post = (url, data) => {
    return fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => checkStatus(res)).then((res) => parseJSON(res))
}