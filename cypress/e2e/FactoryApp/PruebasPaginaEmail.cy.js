/// <reference types="cypress" />
import TestEmail from '../../support/PageObjects/FactoryApp/TestEmail.cy'
describe('Aprobando el primer Email',()=>{
    const email=new TestEmail();
    email.VisitHome()
    it('Email',()=>{
   email.AprobarUnaSolicitud()
    })
   
})