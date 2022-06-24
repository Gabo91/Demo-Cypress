class TestEmail{
    VisitHome(){
        let tiempo =1500
       before(()=>{
        cy.visit("http://localhost:1080/")
        cy.wait(tiempo)
        cy.title('').should('eq','Fake SMTP Server')
        cy.wait(tiempo)
       })
    }
    AprobarUnaSolicitud(){
    let tiempo =1500
        cy.get('.card').first().click().then(()=>{
            cy.wait(tiempo)
            cy.contains('Aprobar').click()
            cy.wait(tiempo)
            cy.get('body').should('have.text','Thanks for the hard work!')
        })
    }
    RechazarUnaSolicitud(){
        let tiempo =1500
            cy.get('.card').first().click().then(()=>{
                cy.wait(tiempo)
                cy.contains('Rechazar').click()
                cy.wait(tiempo)
                cy.get('body').should('have.text','Thanks for the hard work!')
            })
        }
}//Final
export default TestEmail;