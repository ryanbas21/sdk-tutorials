import { Config } from '@forgerock/javascript-sdk';

export async function initApp() {
  Config.set({
    clientId: 'myApp',
    tree: 'Login', 
    serverConfig: {
      baseUrl: 'http://localhost:9443/am',
    }
  });

  // implement a call to your tree here
}


initApp();
