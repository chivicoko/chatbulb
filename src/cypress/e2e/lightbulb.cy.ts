describe('Lightbulb and Chat App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the initial light status', () => {
    cy.get('[data-cy=lightbulb-icon]').should('have.class', 'fill-gray-400');
  });

  it('should toggle the light on and off', () => {
    cy.get('[data-cy=lightbulb-toggle]').click();
    cy.get('[data-cy=lightbulb-icon]').should('have.class', 'fill-yellow-400');

    cy.get('[data-cy=lightbulb-toggle]').click();
    cy.get('[data-cy=lightbulb-icon]').should('have.class', 'fill-gray-400');
  });

  it('should send a command to toggle the light using AI', () => {
    cy.get('[data-cy=chat-input]').type('Turn on the light');
    cy.get('[data-cy=chat-send]').click();

    cy.get('[data-cy=lightbulb-icon]').should('have.class', 'fill-yellow-400');
  });

  it('should display an error message if the command fails', () => {
    cy.get('[data-cy=chat-input]').type('Invalid command');
    cy.get('[data-cy=chat-send]').click();

    cy.contains('Bot: Error toggling light');
  });
});
