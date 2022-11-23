export default class FetchWrapper {
    baseURL: string;
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    get(endpoint: string) {
        return fetch(this.baseURL + endpoint)
        .then(response => response.json())
    }
}