// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillRecipient', (firstName, lastName, street, houseNumber, postcode, city) => {
  cy.get('input[name="firstName"]').should('be.visible').click().type(firstName);
  cy.get('input[name="lastName"]').should('be.visible').click().type(lastName);
  cy.get('input[name="street"]').should('be.visible').click().type(street);
  cy.get('input[name="houseNumber"]').should('be.visible').click().type(houseNumber);
  cy.get('input[name="postcode"]').should('be.visible').click().type(postcode);
  cy.get('input[name="city"]').should('be.visible').click().type(city);
});

Cypress.Commands.add('fillSender', (firstName, lastName, street, houseNumber, postcode, city, email) => {
  cy.get('input[name="firstName"]').should('be.visible').click().type(firstName);
  cy.get('input[name="lastName"]').should('be.visible').click().type(lastName);
  cy.get('input[name="street"]').should('be.visible').click().type(street);
  cy.get('input[name="houseNumber"]').should('be.visible').click().type(houseNumber);
  cy.get('input[name="postcode"]').should('be.visible').click().type(postcode);
  cy.get('input[name="city"]').should('be.visible').click().type(city);
  cy.get('input[name="email"]').should('be.visible').click().type(email);
});

// 1) neutralize any cookie/overlay banner
Cypress.Commands.add('disableOverlays', () => {
  // pretend consent is already given
  cy.window().then((win) => {
    win.localStorage.setItem(
      'uc-user-prefs',
      JSON.stringify({ consents: { all: true }, timestamp: Date.now() })
    );
  });

  // hide any stray overlay via CSS
  cy.document().then((doc) => {
    const style = doc.createElement('style');
    style.innerHTML = `
      #usercentrics-root,
      .overlay,
      .cookie-consent,
      [data-testid="cookie-banner"] {
        display: none !important;
        visibility: hidden !important;
      }
    `;
    doc.head.appendChild(style);
  });
});

// 2) fill a set of named inputs by writing to .value + dispatching input event
Cypress.Commands.add(
  'fillRecipient',
  (firstName, lastName, street, houseNumber, postcode, city) => {
    const data = {
      firstName,
      lastName,
      street,
      houseNumber,
      postcode,
      city,
    };

    Object.entries(data).forEach(([name, value]) => {
      cy.get(`input[name="${name}"]`, { timeout: 10000 }).should('exist').then(($input) => {
        const el = $input[0];
        el.focus();
        el.value = value;
        el.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
  }
);

// 3) fill a set of named inputs by writing to .value + dispatching input event
Cypress.Commands.add(
  'fillSender',
  (firstName, lastName, street, houseNumber, postcode, city, email) => {
    const data = {
      firstName,
      lastName,
      street,
      houseNumber,
      postcode,
      city,
      email,
    };

    Object.entries(data).forEach(([name, value]) => {
      cy.get(`input[name="${name}"]`, { timeout: 10000 }).should('exist').then(($input) => {
        const el = $input[0];
        el.focus();
        el.value = value;
        el.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
  }
);