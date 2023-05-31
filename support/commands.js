// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//add new custom command for click link
Cypress.Commands.add('ClickLink',(label)=>{
    cy.get("a").contains(label).click()
})

/*
//overwrite custom command
Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {})=>{
	// determine if a filter argument was passed
	if(typeof text == 'object'){ // when text is passed => true
		options = text
		text = filter
		filter = undefined
	}
	
	options.matchCase = false  // default is true
	return originalFn(subject, filter, text, options)
})
*/

Cypress.Commands.add('Loginwebsite',(username,password)=>{
    cy.get("#Email").type(username)
    cy.get("#Password").type(password)
    cy.get("button[class='button-1 login-button']").click()
})