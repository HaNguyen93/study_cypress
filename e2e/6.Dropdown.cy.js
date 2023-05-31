
describe('check UI element',()=>{
/*
it('verify dropdown',()=>{

    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country")
    .select('Italy')
    .should('have.value','Italy')

})
*/
it.skip('dropdown without select',()=>{

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container").click()
    cy.get("input.select2-search__field").type('Indian').type('{enter}')

    //get results
    cy.get("#select2-billing_country-container").should('have.contain','Indian')

})

it.skip('dropdown Suggestion',()=>{

    cy.visit("https://vi.wikipedia.org/wiki/Trang_Ch%C3%ADnh")
   
    cy.get("input.vector-search-box-input").type('Delhi')
    cy.get("li[role='option']").contains('Delhi Durbar').click()

})

it('dropdown Dynamic',()=>{

    cy.visit("https://www.google.com.vn/?hl=vi")
    cy.get("textarea[name='q']").type('cypress automation')
    cy.get("div.wM6W7d").should('have.length','12')

    cy.get("div.wM6W7d").each(($el,index,$list)=>{
        if($el.text() =='cypress automation tool'){
            cy.wrap($el).click()
        }
    })
   
    cy.get("textarea.gLFyf").should('have.value','cypress automation tool')

})

})