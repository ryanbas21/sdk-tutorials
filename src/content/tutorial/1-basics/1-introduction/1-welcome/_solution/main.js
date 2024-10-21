import { Config } from '@forgerock/javascript-sdk';

export function initApp() {
  Config.set({
    clientId: 'myApp',
    tree: 'Login', 
    serverConfig: {
      baseUrl: 'http://localhost:9443/am',
    }
  });
}


initApp();
