
class Test{
    VisitHome(){
        let tiempo=1000
        before(()=>{
            
            cy.visit("http://localhost:8010/choose-user")
            cy.title('').should('eq','FactoryApp')
            cy.wait(tiempo)
        })  
         
    }
    LogOut(){
        after(()=>{
            cy.get(':nth-child(4) > .btn').should('be.visible').click()
        })
    }
    
    SeleccionarUsuario(){
        let tiempo=1000
        cy.fixture("datos").then(testdata=>{
            testdata.forEach(data=>{
                const nombre=data.Usuario
            cy.get('.text-center').should('have.text',"Por favor escoja un usuario de la siguiente lista y presione en el botón 'Empezar sesión' para simular la sesión")
            cy.get('.form-control').should('have.text','Seleccione un usuarioElizabeth SanchezFernando ValenciaJulian RamirezKaren MedinaOscar DíazPatricia Mejia')
            cy.get('.form-control').should('be.visible').select(nombre)
            cy.wait(tiempo)
            cy.get('.btn').should('be.visible').should('have.text','Empezar sesión').click()
            //this.AgregarSolicitud()
            //this.EditarPrimeraSolicitud("Cemento x10 kg.","4")
            //this.EliminarPrimeraSolicitud()
            //cy.get(':nth-child(4) > .btn').should('be.visible').click()
            
            })
        })
    }
    AgregarSolicitud(){
        let tiempo=1000
        cy.get(':nth-child(3) > .text-dark').should('be.visible').click()
        cy.wait(tiempo)
        cy.get('div > .btn').should('be.visible').click()
        cy.wait(tiempo)
        cy.get('.form-control').should('be.visible').select('Carbón x2 kg.')
        cy.wait(tiempo)
        cy.get('input').should('be.visible').clear().type('2').then(()=>{
            cy.wait(tiempo)
            cy.get('.input-group-append > .btn').should('be.visible').click()
            cy.wait(tiempo)
            cy.get('.btn-primary').should('be.visible').click().then(()=>{
                cy.wait(tiempo)
                cy.get('.swal-modal').should('be.visible').should('contain.text','Solicitud guardada correctamente')
            })
        })
    }
    EditarTodosSolicitudes(matPrima,cantidad){
        let tiempo=1000
        //creamos un arreglo
        const datos=[]
        //Ingresamos al menu de solicitudes
        cy.get(':nth-child(3) > .text-dark').click()
        cy.wait(tiempo)
        //obtenemos la tabla y usamos un each para obtener la informacion recolectada
        cy.get('#root > div > div > div > table > tbody >tr').each(($el,index,$list)=>{
            //asignamos los datos obtenidos con el arreglo previamente creado 
            datos[index]=$el.text()
            //imprimimos lod datos
            cy.log(datos.length)}).then(()=>{
                cy.wait(tiempo)
                //creamos un for verificando todos los datos
                 for (let i = 0; i < 2; i++) {
                    let estado =cy.get('#root > div > div > div > table > tbody >tr >:nth-child(5)').eq(i)
                    estado.each(($el,index,$list)=>{
                        const datos2=$el.text()
                        cy.log(datos2)
                        if(datos2.includes('Borrador')){
                            cy.wait(tiempo)
                            cy.log('Entra al if')
                            cy.get('#root > div > div > div > table > tbody >tr >td > button').should('be.visible').eq(i).click()
                            cy.wait(tiempo)
                            cy.get('.btn-warning').should('be.visible').click()
                            cy.wait(tiempo)
                            cy.get('.form-control').should('be.visible').select("Cemento x10 kg.")
                            cy.wait(tiempo)
                            cy.get('input').should('be.visible').clear().type("4")
                            cy.wait(tiempo)
                            cy.get('.input-group-append > .btn').click()
                            cy.wait(tiempo)
                            //cy.get('.btn-primary').should('be.visible').click()
                                cy.wait(tiempo)
                                //cy.get('.swal-modal').should('be.visible').should('contain.text','Solicitud guardada correctamente')
                                cy.wait(tiempo)
                                cy.get(':nth-child(3) > .text-dark').should('be.visible').click()
                                cy.wait(tiempo)
                        }
                        else{
                            cy.log("Entra al else")
                            i++
                        }
                    })
                 }                                        
            })
    }
    EditarPrimeraSolicitud(matPrima,cantidad){
        let tiempo=1000
        const datos=[]
        cy.get(':nth-child(3) > .text-dark').should('be.visible').click()
        cy.wait(tiempo)
        cy.get('#root > div > div > div > table > tbody >tr').should('be.visible').each(($el,index,$list)=>{
            datos[index]=$el.text()
            cy.log(datos.length)}).then(()=>{    
                    cy.get('#root > div > div > div > table > tbody >tr >td > button').should('be.visible').first().click()
                    cy.wait(tiempo)
                    cy.get('.btn-warning').should('be.visible').click()
                    cy.wait(tiempo)
                    //cy.get(':nth-child(3) > .btn').click()
                    //cy.wait(2000)
                    //cy.get(':nth-child(2) > .swal-button').click()
                    cy.get('.form-control').should('be.visible').select(matPrima)
                    cy.wait(tiempo)
                    cy.get('input').should('be.visible').clear().type(cantidad)
                    cy.wait(tiempo)
                    cy.get('.input-group-append > .btn').click()
                    cy.wait(tiempo)
                    cy.get('.btn-primary').should('be.visible').click().then(()=>{
                        cy.wait(tiempo)
                        cy.get('.swal-modal').should('be.visible').should('contain.text','Solicitud guardada correctamente')
                        cy.wait(tiempo)
                        cy.get(':nth-child(3) > .text-dark').should('be.visible').click()
                        cy.wait(tiempo)
                    })
                
            })
    }
    EliminarUltimoMaterialAgregado(){
        let tiempo=1000
        const datos=[]
        const datos2=[]
        cy.get(':nth-child(3) > .text-dark').click()
        cy.wait(tiempo)
        cy.get('#root > div > div > div > table > tbody >tr').each(($el,index,$list)=>{
            datos[index]=$el.text()
            cy.log(datos.length)}).then(()=>{
                    cy.wait(tiempo)
                    cy.get('#root > div > div > div > table > tbody >tr >td > button').first().click()
                    cy.wait(tiempo)
                    cy.get('.btn-warning').click()
                    cy.wait(tiempo)
                    //cy.get('#root > div > div > div > table > tbody > tr > td > button').eq(0).click()
                    cy.get('#root > div > div > div > table > tbody > tr').each(($el,index,$list)=>{
                        cy.wait(tiempo)
                        datos2[index]=$el.text()
                        cy.log(datos2.length)})
                        cy.get('#root > div > div > div > table > tbody >tr >td > button').then(()=>{
                            cy.wait(tiempo)
                            if(datos2.length<2){
                                //cy.log("entra al if")
                                cy.get('.btn-primary').click()
                                cy.wait(tiempo)
                                cy.get(':nth-child(3) > .text-dark').click() 
                                cy.log("########################") 
                                cy.log("Solo hay un elemento en la tabla")
                                cy.log("########################") 
                                cy.log("************************") 
                                cy.log("########################") 
                                cy.log("Volviendo al menu de solicitudes")
                                cy.log("########################") 
                            }else{
                                cy.log("entra al else")
                                cy.wait(tiempo)
                                cy.get('#root > div > div > div > table > tbody >tr >td > button').last().click()
                                cy.wait(tiempo)
                                cy.get(':nth-child(2) > .swal-button').click()
                                cy.wait(tiempo)
                                cy.get('.btn-primary').click()
                               // cy.get(':nth-child(3) > .text-dark').click()
                            }
                        })//.eq(0).click()
                   
                
            })
    }
    PublicarTodaSolicitud(){
        let tiempo=1000
        const datos=[]
        
        cy.get(':nth-child(3) > .text-dark').click()
        cy.wait(tiempo)
        cy.get('#root > div > div > div > table > tbody >tr').each(($el,index,$list)=>{
            
            datos[index]=$list.text()
            cy.log(datos.length)}) 
            cy.wait(tiempo)
            cy.get('#root > div > div > div > table > tbody >tr >td ').then(()=>{
                cy.wait(tiempo)
            
                for (let i = 0; i < datos.length; i++) {
                    cy.wait(tiempo)
                    let estado =cy.get('#root > div > div > div > table > tbody >tr >:nth-child(5)').eq(i)
                    estado.each(($el,index,$list)=>{
                        const datos2=$el.text()
                        cy.log(datos2)
                        
                        if(datos2.includes('Borrador')){
                            cy.wait(tiempo)
                            cy.log('Entra al if')
                            cy.wait(tiempo)
                            cy.get('#root > div > div > div > table > tbody >tr >td > button').eq(i).click()
                            cy.wait(tiempo)
                            cy.get('.btn-primary').click()
                            cy.wait(tiempo)
                            cy.get(':nth-child(2) > .swal-button').click()
                            cy.wait(tiempo)
                            cy.get('.swal-text').should('have.text','Solicitud publicada correctamente')
                            cy.wait(tiempo)
                            //cy.get(':nth-child(3) > .text-dark').click()
                        }
                        else{
                            i++
                        }
                    })    
                }
            })    
    }
    PublicarPrimeraSolicitud(){
        let tiempo=1000
        const datos=[]
        cy.get(':nth-child(3) > .text-dark').click()
        cy.wait(tiempo)
        cy.get('#root > div > div > div > table > tbody >tr').each(($el,index,$list)=>{ 
            datos[index]=$el.text()
            cy.log(datos.length)}).then(()=>{
                cy.wait(tiempo)
                cy.get('#root > div > div > div > table > tbody >tr >td > button').first().click()
                cy.wait(tiempo)
                            cy.get('.btn-primary').click()
                            cy.wait(tiempo)
                            cy.get(':nth-child(2) > .swal-button').click()
                            cy.wait(tiempo)
                            cy.get('.swal-text').should('have.text','Solicitud publicada correctamente')
            })
    }
    
    EliminarPrimeraSolicitud(){
        let tiempo=1000
        const datos=[]
        cy.get(':nth-child(3) > .text-dark').click()
        cy.wait(tiempo)
        cy.get('#root > div > div > div > table > tbody >tr').each(($el,index,$list)=>{ 
            datos[index]=$el.text()
            cy.log(datos.length)}).then(()=>{
                cy.wait(tiempo)
                let estado = cy.get('#root > div > div > div > table > tbody >tr >:nth-child(5)').first()
                estado.each(($el,index,$list)=>{
                    const datos_aux=$el.text()
                    cy.log(datos_aux)
                    if (datos_aux.includes('Borrador')) {
                        cy.get('#root > div > div > div > table > tbody >tr >td > button').first().click()
                        cy.wait(tiempo)
                        cy.get('.btn-danger').should('be.visible').click()
                        cy.wait(tiempo)
                        cy.get(':nth-child(2) > .swal-button').should('be.visible').click()
                        cy.wait(tiempo)
                        cy.get('.swal-text').should('have.text','Solicitud eliminada correctamente')
                        cy.get(':nth-child(1) > .text-dark').should("be.visible").click()

                    } else {
                        cy.log('###########################')
                        cy.log('El estado no es "Borrador"')
                        cy.log('###########################')
                    }
                })
            })
    }
    EliminarUltimaSolicitud(){
        let tiempo=1000
        const datos=[]
        cy.get(':nth-child(3) > .text-dark').click()
        cy.wait(tiempo)
        cy.get('#root > div > div > div > table > tbody >tr').each(($el,index,$list)=>{ 
            datos[index]=$el.text()
            cy.log(datos.length)}).then(()=>{
                cy.wait(tiempo)
                let estado = cy.get('#root > div > div > div > table > tbody >tr >:nth-child(5)').last()
                estado.each(($el,index,$list)=>{
                    const datos_aux=$el.text()
                    cy.log(datos_aux)
                    if (datos_aux.includes('Borrador')) {
                        cy.get('#root > div > div > div > table > tbody >tr >td > button').last().click()
                        cy.wait(tiempo)
                        cy.get('.btn-danger').should('be.visible').click()
                        cy.wait(tiempo)
                        cy.get(':nth-child(2) > .swal-button').should('be.visible').click()
                        cy.wait(tiempo)
                        cy.get('.swal-text').should('have.text','Solicitud eliminada correctamente')

                    } else {
                        cy.log('###########################')
                        cy.log('El estado no es "Borrador"')
                        cy.log('###########################')
                    }
                })
            })
    }
    EliminarPorId(){
        let tiempo=1000
        cy.fixture("Ids").then(inf => {
            inf.forEach(data=>{
                const id= data.Id
                cy.get(':nth-child(3) > .text-dark').click()
                cy.wait(tiempo)
                //cy.get('tbody').should('be.visible').contains(id).siblings().contains('button','Ver').click()
                let estado = cy.get('tbody>tr>td:first-child').contains('td',id).siblings().contains('Borrador').siblings().contains('button', 'Ver').click()
                cy.get('.btn-danger').should('be.visible').click()
                cy.wait(tiempo)
                cy.get(':nth-child(2) > .swal-button').should('be.visible')
                cy.wait(tiempo)
                cy.get(':nth-child(1) > .swal-button').click()
                cy.wait(tiempo)
                cy.get(':nth-child(3) > .text-dark').click()
            })
        })     
    }
}//FINAL
export default Test;