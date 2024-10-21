---
type: lesson
title: Working with a step
focus: /main.js
---

# Steps
A step is the entire response that you receive back from a call to the `ForgeRock` authorization server. A step can contain lots of information, but right now we want to focus our attention to `callbacks`.

## Callbacks
Inside of a step object, there is a key called `callbacks`. `callbacks` will be an array of objects. Each item inside of the array contains information that you can use to render information to your user, set information to send back to the authorization server, and more.

To help, the `@forgerock/javascript-sdk` contains many `callbacks`, that are designed to help integrate with the `step` received from your authorization server. 

This way, you don't have to worry about diving into complex objects and setting values and then parsing it back to JSON to send back to AM, we will do that for you!


## Todo
- Import `NameCallback` from the `@forgerock/javascript-sdk`;
- Import `PasswordCallback` from the `@forgerock/javascript-sdk`;
- 

