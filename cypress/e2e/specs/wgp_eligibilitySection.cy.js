/// <reference types = "cypress" />
import {loginPage} from "../pages/loginPage"
// import {dashBoard} from "../pages/dashBoard"

const loginpage = new loginPage()
// const dashboardpge = new dashBoard()
// it('Gmail Login Test', ()=>{
//     cy.visit('http://test-admin.maintainsimple.com')
//     cy.get('[data-testid="username"]').type('admin@test.com')
//     cy.get('[data-testid="password"]').type('test')
//     cy.get('.MuiGrid-grid-xs-8').click()
//     cy.get('.css-1xhj18k > .MuiTypography-root').should('be.visible')
//     cy.get(':nth-child(1) > [data-testid="incident-counter"] > [data-testid="incident-counter-value"]',{timeout:6000}).should('have.text','0')
// })

describe('WGP_form1_EligibilitySection', function(){
    // before(function(){
    //    cy.fixture('loginDetails').then(function(data){
    //        this.Data = data
    //    })
    // })

    it('WGP_form1_EligibilitySection', function()
    {
        loginpage.loginToPortal(Cypress.config().baseUrl, Cypress.config().userName, Cypress.config().password);
    
    })
})

