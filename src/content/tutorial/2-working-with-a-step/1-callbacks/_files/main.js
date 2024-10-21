import { CallbackType, Config, FRAuth } from '@forgerock/javascript-sdk';

export async function initApp() {
  Config.set({
    clientId: 'myApp',
    tree: 'Login', 
    serverConfig: {
      baseUrl: 'http://localhost:9443/am',
    }
  });

  const step = await FRAuth.next();

  renderLoginForm(step);

}

function renderLoginForm(step) {

  const username = step.getCallbacksOfType(CallbackType.NameCallback);
  const password = step.getCallbacksOfType(CallbackType.PasswordCallback);

 
  document.addEventListener('#username-field', (event) => {

  }) 
}


initApp();
