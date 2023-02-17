import ApiClient from "./ApiClient";

export default class JsonApiClient extends ApiClient {
  getCollection(type: string) {
    const [entityTypeId, bundleId] = type.split('--');
    return this.fetch(`${this.baseUrl}${this.apiPrefix}/${entityTypeId}/${bundleId}`)
        .then((response) => response.json());
  }
}