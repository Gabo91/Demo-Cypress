/// <reference types="cypress" />

describe('Demo de una api', function(){

  
   //before(function)
    /*it('Test Uno',()=>{
       const datos={
        "Nombre":"Harold",
        "ApPaterno":"Mejia",
        "ApMaterno":"Mena",
        "Telf":"72285639",
        "Dir":"Villa Granado"
       }
       cy.log(datos["Nombre"])
       cy.log(datos["ApPaterno"])
       cy.log(datos["ApMaterno"])
       cy.log(datos["Telf"])
       cy.log(datos["Dir"])

    })*/
    /*it('Test Uno',()=>{
        let tiempo=1000
        cy.fixture("Json").then(testdata=>{
            testdata.array.forEach(data => {
                const d_nombre=data.nombre
                cy.visit("https://demoqa.com/text-box")
            cy.get('#userName').should('be.visible').type(d_nombre)
            cy.wait(tiempo)
            });
        })
        
    })*/
    it('',()=>{
        let tiempo=1000
        cy.fixture("datos").then(testdata=>{
            testdata.forEach(data=>{
                const d_nombre=data.Usuario
                cy.visit("https://demoqa.com/text-box")
                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(tiempo)
            })
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    
})