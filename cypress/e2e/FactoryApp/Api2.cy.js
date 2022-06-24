/// <reference types="cypress" />
describe('Demo de una api',()=>{

    it('Test Uno',()=>{
       const datos={
        "Nombre":"Harold",
        "ApPaterno":"Mejia",
        "ApMaterno":"Mena",
        "Telf":"72285639",
        "Dir":"Villa Granado",
        "Cursos":[
            {
            "Nombre":"PHP",
            "Descripcion":"Lenguaje de programacion"
            },
            {
                "Nombre":"Java",
                "Descripcion":"Lenguaje de programacion"
            },
            {
                "Nombre":"Python",
             "Descripcion":"Lenguaje de programacion"
            },
    ]
       }
       cy.log(datos.Nombre)
       cy.log(datos.Dir)
       cy.log(datos.Cursos)
       cy.log(datos.Cursos[1])
       cy.log(datos.Cursos[2].Nombre)
       cy.log(datos.Cursos[2].Descripcion)


    })
    
})