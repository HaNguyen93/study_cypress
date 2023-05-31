describe('Check UI element',()=>{

it('verify radio button',()=>{

    cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    //visibility
    cy.get("input#female").should('be.visible')
    cy.get("input#male").should('be.visible')

    //select radio button
    cy.get("input#female").check().should('be.checked')
    cy.get("input#male").should('not.be.checked')

})

it('verify checkbox',()=>{

    cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    //visibility
    cy.get("input#monday").should('be.visible')
   
    //select single checkbox 
    cy.get("input#monday").check().should('be.checked')

    //uncheck
    cy.get("input#monday").uncheck().should('not.be.checked')

    //select all checkbox
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    //select first/last
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
})

})