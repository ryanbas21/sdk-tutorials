---
type: lesson
title: Start a journey
focus: /main.js
---

# Starting a Journey

We need to tell our server, that we want to start a journey. In order to do that we use the `FRAuth` module from the `@forgerock/javascript-sdk`.


When we call `next` from the `FRAuth` module, with no arguments, we are essentially starting a journey.


## Promises
It's important to note that many of the `@forgerock/javascript-sdk` modules heavily use promises. We are going to assume knowledge of promises for the purpose of this tutorial and familiarity with the `async`/`await` syntax. 

If you need to brush up on this topic, this would be a good time to do so.


## Todo
Implement a call to your journey below the comment by calling `FRAuth` and the `next` method with no arguments. Don't forget, it's a promise!

Set the result of the call to a variable called `step`.
