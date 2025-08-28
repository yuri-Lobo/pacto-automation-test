describe('Validação de busca no Yahoo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve buscar por "Pacto Soluções" e exibir resultados relevantes', () => {
    cy.get('input[name="p"]').should('be.visible').type('Pacto Soluções{enter}');

    // Valida URL
    cy.url().should('include', 'Pacto+Soluções');

    // Valida se existem resultados
    cy.get('#web > ol > li').should('have.length.greaterThan', 0);

    // Confirma que aparece a palavra "Pacto"
    cy.get('#web').contains('Pacto').should('exist');
  });
});
