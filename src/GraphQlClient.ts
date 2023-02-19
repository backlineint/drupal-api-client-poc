import ApiClient from "./ApiClient";
import { BaseUrl, ApiClientOptions } from './types';

export default class GraphQlClient extends ApiClient {
  constructor(baseUrl: BaseUrl, options?: ApiClientOptions) {
    super(baseUrl, options);
    const { apiPrefix } = options || {};
    this.apiPrefix = apiPrefix || 'graphql';
  }

  query(query: string) {
    return this.fetch(`${this.baseUrl}/${this.apiPrefix}`, {
      method: 'POST',
      body: JSON.stringify({query: `${query}`}),
    }).then((response) => response.json());
  }
}