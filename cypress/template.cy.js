/// <reference types="cypress" />
describe('Probando de nuevo',()=>{

    it('Visit Login',()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.title('').should('eq','The Internet')

    })
    it('Editar solicitud',()=>{
        
    })
})