class Login{

    txtUsername="input[placeholder='Username']"
    txtPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    txtExpected=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    setUserName(username){
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click()
    }

    verifyLogin(expected){
        cy.get(this.txtExpected).should('have.text',expected)
    }

}
export default Login