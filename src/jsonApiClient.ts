import apiClient from "./apiClient";

export default class jsonApiClient extends apiClient {
  getResource() {
    if (this.customFetch) {
      return this.customFetch(`${this.baseUrl}${this.apiPrefix}/node/article`)
        .then((response) => response.json());
    }
    else {
      return fetch(`${this.baseUrl}${this.apiPrefix}/node/article`)
        .then((response) => response.json());
    }
  }
}