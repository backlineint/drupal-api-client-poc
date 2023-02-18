import ApiClient from "./ApiClient";

export default class GraphQlClient extends ApiClient {
  query(query: string) {
    return this.fetch(`${this.baseUrl}/graphql`, {
      method: 'POST',
      body: JSON.stringify({query: `${query}`}),
    }).then((response) => response.json());
  }
}