describe('Validar o fluxo Para Você', () => {
  //Acessando o site e aceitando os termos
  before('Acessar o site VR', () => {
    cy.visit('/')
    Cypress.Cookies.debug(true)
    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
    Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
  })

//Clicar no botão  "PRA VOCE"
it ('Navegar até a seção - pra voce', ()=> {
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click();
})

//Validando a pagina atual
it ('Validar se estou na pagina correta', ()=> {
    cy.url().should(
        'be.equal',
        `${Cypress.config("baseUrl")}/onde-aceita.htm`
      )
})

//Clicar no botão "ONDE USAR MEU CARTAO VR"
it ('Clicar no botão - Onde usar meu cartão VR', ()=> {
    //Clicar no botão "Onde usar meu cartão VR?""
    cy.get('.vr-hero__actions > .vr-button--negative').click();

    //Verificar o MAPA
    cy.get('#map').should('be.visible').wait(4000);
})

})