import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

import jsonApiClient from './JsonApiClient';

const customFetch = (input: RequestInfo, init?: RequestInit) => {
  console.log('using custom fetch');
  return fetch(input, init).then((response) => {
    return response;
  });
}

const client = new jsonApiClient('https://dev-ds-demo.pantheonsite.io');
const client2 = new jsonApiClient('https://dev-ds-demo.pantheonsite.io', {apiPrefix: '/jsonapi', customFetch});

console.log(client, client2);

await client.getCollection().then((data) => {
  console.log(data);
});

await client2.getCollection().then((data) => {
  console.log(data);
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
