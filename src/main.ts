import './style.css'

import JsonApiClient from './JsonApiClient';
import GraphQlClient from './GraphQlClient';

const baseUrl = 'https://dev-drupal-api-client-poc.pantheonsite.io';

const customFetch = (input: RequestInfo, init?: RequestInit) => {
  console.log('Using custom fetch');
  return fetch(input, init).then((response) => {
    return response;
  });
}

const jsonApiClient = new JsonApiClient(baseUrl, {customFetch});
const collection = await jsonApiClient.getCollection('node--recipe');
console.log('JSON:API Collection', collection);

const graphqlClient = new GraphQlClient(baseUrl);
const query = await graphqlClient.query(
  `{
    nodeRecipes(first: 10) {
      nodes {
        title
      }
    }
  }`
);
console.log('GraphQL Query', query);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Drupal API Client POC</h1>
    <p>A core API client class that can be extended to support a variety of Drupal APIs.</p>
    <p>For more info, see the <a href="https://docs.google.com/document/d/1MAUCgxJmSHxA6ozVXp6U49UMPF3sJPrInz1rnl9Wf_4/edit?usp=sharing">high level proposal document</a>.</p>
    <h3>Base class <code>apiClient</code> is extended by:</h3>
    <div class="cols">
      <div>
        <h2><code>JsonApiClient</code></h2>
        <pre>
const client = new JsonApiClient('https://dev-ds-demo.pantheonsite.io');
const collection = await client.getCollection('node--recipe').then((data) => data);
        </pre>
        <p>Result:</p>
        <pre>${JSON.stringify(collection, null, 2)}</pre>
      </div>
      <div>
        <h2><code>GraphQlClient</code></h2>
        <pre>
const graphqlClient = new GraphQlClient(baseUrl);
const query = await graphqlClient.query(
  \`{
    nodeRecipes(first: 10) {
      nodes {
        title
      }
    }
  }\`
);
        </pre>
        <pre>${JSON.stringify(query, null, 2)}</pre>
      </div>
    </div>
  </div>
`