---
type: lesson
title: Setup your config
focus: /main.js
---

# Setup your app with the FR Config

The first thing we need to do to integrate an app with the FR-SDK is call the `Config` from the `@forgerock/javascript-sdk`.

`Config` is a `class` that is exported from the `@forgerock/javascript-sdk` package. `Config` has a few methods on it, but two are noteable.


## Set

This is the most common method on `Config` that is to be used by an application developer, and what we will focus on here.

`Config.Set` takes an object that details how your application will communicate to the ForgeRock authorization server.

```ts
// Establish configuration defaults
Config.set({
  clientId: 'myApp',
  serverConfig: { baseUrl: 'https://openam-domain.com/am' },
  tree: 'UsernamePassword'
});
```

If we look at the options passed here, we notice a few specific things. 
  - `clientId` is the name that should map directly to the oauth client you created on your `ForgeRock` tenant.
  - `serverConfig.baseUrl` is the url that is your tenant. it is important to note the `/am` at the end is required in most cases. 
  - `tree` - the journey tree you want to use for this application.

# Implementing Config
For the purposes of this tutorial, we are going to use `localhost` as our authorization server.

Implement `Config` inside of `initApp`.

- Your tree name is `Login`
- Your baseUrl is `http://localhost:9443/am`
- your clientId is 'myApp'


Don't forget to call `initApp` at the end.

