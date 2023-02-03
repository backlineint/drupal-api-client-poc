type apiClientOptions = {
  apiPrefix?: string;
};
export default class apiClient {
  baseUrl: string;
  apiPrefix: string;

  constructor(baseUrl: string, options?: apiClientOptions) {
    this.baseUrl = baseUrl;
    this.apiPrefix = options?.apiPrefix || '/jsonapi';
  }
};