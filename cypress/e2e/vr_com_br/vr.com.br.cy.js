describe('Validar o fluxo Para Você', () => {
  beforeEach('Acessar o site VR', () => {
    cy.visit('/')
  })
  //Aceitar os Termos de Privacidade
  it ('Aceitar termos de Privacidade', ()=> {
    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click();
})

//Localizando o botao "PRA VOCE" e clicar

it ('Navegar até a seção - pra voce', ()=> {
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click();
})

//Apos clicar no botao, estou validando se realmente fui direcionado para a pagina correta (/onde-aceita.htm)
it ('Validar se estou na pagina correta', ()=> {
    cy.url().should(
        'be.equal',
        `${Cypress.config("baseUrl")}/onde-aceita.htm`
      )
})

//Localizando o botao "ONDE USAR MEU CARTAO VR" e clicando
it ('Clicar no botão - Onde usar meu cartão VR', ()=> {
    cy.get('.vr-button.vr-button--negative').click();

    //Aqui eu estou validando se o MAPA está visivel após clicar no botão
    cy.get('#map').should('be.visible').wait(4000);
})

})