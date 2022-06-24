/// <reference types="cypress" />
import Test from'../../support/PageObjects/FactoryApp/Tests.cy'
import TestGramatica from '../../support/PageObjects/FactoryApp/TestGramatica'
describe('Ejecucion de Pruebas Funcionales',()=>{

const master=new Test();
const gramatica=new TestGramatica();
master.VisitHome()
//master.LogOut()

    it.only('Ingresamos a la pagina',()=>{
        //Usuarios disponibles: Elizabeth Sanchez, Fernando Valencia,Julian Ramirez, Karen Medina,Oscar Díaz,Patricia Mejia
        master.SeleccionarUsuario()
        // master.EditarTodosSolicitudes()
        //master.EliminarPorId()   
        
    })
    it.only('Agregar una solicitud',()=>{
        //Materias primas disponibles:Carbón x2 kg., Cemento x10 kg., Hierro x5 kg., Petróleo x5 gal.
        //Por defecto creara una solicitud de Carbón x2 kg.
        master.AgregarSolicitud()    
    })
    it.only('Editamos la ultima solicitud creada',()=>{
        //Materias primas disponibles:Carbón x2 kg., Cemento x10 kg., Hierro x5 kg., Petróleo x5 gal.
        master.EditarPrimeraSolicitud('Cemento x10 kg.','4')
    })
    it.only('Eliminamos el ultimo material agregado',()=>{
        //Eliminara el ultimo material de la lista.
        master.EliminarUltimoMaterialAgregado()
    })
    it.only('Eliminamos Solicitud',()=>{
       // Elimina la primera solicitud en la tabla de resultados
       master.EliminarPrimeraSolicitud()
    })
    it('Publicamos una Solicitud',()=>{
        master.AgregarSolicitud()
        master.PublicarPrimeraSolicitud()
    })
    it('Prueba',()=>{
        master.PublicarTodaSolicitud()
     })
    it.only('Validacion de escritura',()=>{
        gramatica.ValidarPaginaInicio()
        gramatica.ValidarMateriaPrima()
        gramatica.ValidarSolicitudes()
        gramatica.ValidarNuevaSolicitud()  
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    
})// FINAL
