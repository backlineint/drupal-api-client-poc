import apiClient from "./apiClient";

export default class jsonApiClient extends apiClient {
  getResource() {
    return fetch(`${this.baseUrl}${this.apiPrefix}/node/article`)
      .then((response) => response.json());
  }
}