describe('Validação de termos de segurança UOL', () => {
  it('Deve acessar a página de segurança e verificar a última atualização', () => {
    // Página de política de privacidade da UOL
    cy.visit('https://www.uol.com.br/empresa/politica-de-privacidade/');

    // Localiza o texto de última atualização
    cy.contains(/Última atualização/i)
      .should('be.visible')
      .then(($el) => {
        const text = $el.text();
        cy.log('Texto encontrado: ' + text);

        // Valida formato de data DD/MM/AAAA
        const regexData = /\d{2}\/\d{2}\/\d{4}/;
        expect(text).to.match(regexData);
      });
  });
});
