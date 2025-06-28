describe('Parcel Configuration', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.disableOverlays();
    cy.visit('https://www.gls-pakete.de/en/private-customers/parcel-shipping/parcel-configuration');
  })

  it('Recipient information with valid data', () => {
    cy.fillRecipient('John', 'Doe', 'Street 1', '1', '99998', 'City 1');
  })

  it('Recipient information without data - errors', () => {
    cy.get('[data-testid="addToCartButton"]').click();
    cy.get('[id=«R2pcmfetkbddb»-error-message]').should('contain.text', 'First Name is required').should('be.visible');
    cy.get('[id=«R4pcmfetkbddb»-error-message]').should('contain.text', 'Last Name is required').should('be.visible');
    cy.get('[id=«Rp9cmfetkbddb»-error-message]').should('contain.text', 'Street is required').should('be.visible');
    cy.get('[id=«R199cmfetkbddb»-error-message]').should('contain.text', 'House number is required').should('be.visible');
    cy.get('[id=«Rr9cmfetkbddb»-error-message]').should('contain.text', 'Postcode is required').should('be.visible');
    cy.get('[id=«R1b9cmfetkbddb»-error-message]').should('contain.text', 'City is required').should('be.visible');
  })
})