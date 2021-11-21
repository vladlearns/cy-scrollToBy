# @vladlearns/cy-scrolltoby

> Cypress custom command "cy.scrollToBy" for iterative scrolling in e2e tests.

## Examples

``` javascript
cy.scrollToBy();
cy.scrollToBy({ direction = "bottom", frequency = 200, interval = 30, timeout = 50000 });
```

## Install

```
npm install --save-dev @vladlearns/cy-scrolltoby
```

Add the following line to your Cypress support file

```js
// usually cypress/support/index.js
import '@vladlearns/cy-scrolltoby/support'
```

This will add a new command `cy.scrollToBy` for scrolling.

## TypeScript

The definition for `cy.scrollToBy` command is in [index.d.ts](index.d.ts) file. If you are using JavaScript, include the following line in our spec files

```js
// cypress/integration/my-spec.js
/// <reference types="@vladlearns/cy-scrolltoby" />
```

With this line, you should have Intelligent Code Completion working in most IDEs and the TypeScript compiler should understand the `cy.scrollToBy` command.


