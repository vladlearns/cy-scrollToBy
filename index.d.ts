/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {

    scrollToBy (options: { direction?: string,
      frequency?: number,
      interval?: number,
      timeout?: number}): Chainable<Element>
  }
}