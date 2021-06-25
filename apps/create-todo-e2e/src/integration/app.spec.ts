describe('create-todo', () => {
  beforeEach(() => cy.visit('/'));
  it('should display task with chart', () => {
    cy.get('textarea[id="description"]').type('My task');
    cy.get('input[id="due"]').clear().type(`2021-06-30{enter}`);
    cy.get('input[id="reminder"]').clear().type(`2021-06-30{enter}`).wait(1000);
    cy.contains('View Task').click().wait(5000);
  });
});
