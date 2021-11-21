/// <reference types="cypress" />
/**
 * @param {options.direction} "bottom"- Direction of scrolling
 * @param {options.frequency} 200 - Number of iterations
 * @param {options.interval} 30 - Pause between scroll iterations in ms
 * @param {options.timeout} 50000 - Cypress default timeout
 */

 Cypress.Commands.add("scrollToBy", ({
    direction = "bottom",
    frequency = 200,
    interval = 30,
    timeout = 50000
  } = {}) => {
    cy.window().then({"timeout":timeout}, (window) =>{
    const scrollHeight = window.document.body.scrollHeight;
    let done;
    let scrolls = 1;
    let deferred = new Promise(resolve => (done = resolve));
    let total = scrollHeight / frequency;
  
    const scroll = () => {
      let scrollBy = total * scrolls;
      window.setTimeout(() => {
        if (direction ==="top") window.scrollTo(0, scrollHeight - scrollBy)
        if (direction ==="bottom") window.scrollTo(0, scrollBy)
  
        if (scrolls < frequency) {
          scrolls += 1;
          scroll();
        }
  
        if (scrolls === frequency) done(true);
      }, interval);
    }

    scroll();
  
    return deferred;
  })
});
