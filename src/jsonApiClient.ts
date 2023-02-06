import apiClient from "./apiClient";

export default class jsonApiClient extends apiClient {
  getCollection() {
    return this.fetch(`${this.baseUrl}${this.apiPrefix}/node/article`)
        .then((response) => response.json());
  }
}