describe('LoginForm', () => {
  beforeEach(() => {
    cy.visit('/LoginForm');
  });

  it('displays an error message when the password is missing', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Email and password fields are required');
  });

  it('displays an error message when the email is missing', () => {
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email and password fields are required');
  });

  it('displays a success message when both email and password are provided', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Successfully logged in');
  });
});
