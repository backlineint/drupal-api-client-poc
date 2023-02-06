import { BaseUrl, ApiClientOptions } from './types';

export default class apiClient {
  baseUrl: BaseUrl;
  apiPrefix: ApiClientOptions['apiPrefix'];
  customFetch: ApiClientOptions['customFetch'];

  constructor(baseUrl: BaseUrl, options?: ApiClientOptions) {
    const { apiPrefix, customFetch } = options || {};

    this.baseUrl = baseUrl;
    this.apiPrefix = apiPrefix || '/jsonapi';
    this.customFetch = customFetch;
  }

  async fetch (input: RequestInfo, init?: RequestInit) {
    if (this.customFetch) {
      return await this.customFetch(input, init);
    }
    else {
      return await fetch(input, init);
    }
  }
};