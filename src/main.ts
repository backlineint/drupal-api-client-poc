import './style.css'

import JsonApiClient from './JsonApiClient';

const customFetch = (input: RequestInfo, init?: RequestInit) => {
  console.log('Using custom fetch');
  return fetch(input, init).then((response) => {
    return response;
  });
}

const client = new JsonApiClient('https://dev-ds-demo.pantheonsite.io', {customFetch});

const collection = await client.getCollection('node--recipe').then((data) => data);

console.log('JSON:API Collection', collection);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Drupal API Client POC</h1>
    <h3>Base class <code>apiClient</code> is extended by:</h3>
    <div class="cols">
      <div>
        <h2><code>JsonApiClient</code></h2>
        <code>
          const client = new JsonApiClient('https://dev-ds-demo.pantheonsite.io');</br>
          const collection = await client.getCollection('node--recipe').then((data) => data);
        </code>
        <pre>${JSON.stringify(collection, null, 2)}</pre>
      </div>
      <div>
        <h2><code>GraphQlClient</code></h2>
      </div>
    </div>
  </div>
`