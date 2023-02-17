import apiClient from "./apiClient";

export default class jsonApiClient extends apiClient {
  getCollection(type: string) {
    const [entityTypeId, bundleId] = type.split('--');
    return this.fetch(`${this.baseUrl}${this.apiPrefix}/${entityTypeId}/${bundleId}`)
        .then((response) => response.json());
  }
}