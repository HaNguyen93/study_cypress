
describe('verify alert',()=>{
    //1, javascript Alert: it will have some text and an 'OK' button
    it.skip('js alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
    
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        //alert windown automatically close by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert')
    
        })

    //2, javascript confirm Alert: it will have some text with 'OK' and 'Cancel' button
    it.skip('js alert confirm - button OK',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
    
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        //alert windown automatically close by cypress

        cy.get("#result").should('have.text','You clicked: Ok')
    
        })

    it.skip('js alert confirm - button Cancel',()=>{
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()
        
            cy.on('window:confirm',(t)=>{
                expect(t).to.contains('I am a JS Confirm');
            })
            
    //click button cancel
            cy.on('window:confirm',()=>false)
            cy.get("#result").should('have.text','You clicked: Cancel')
        
            })
    
    //3, javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' button
    it.skip('js alert Prompt - button OK',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Hantn")
        })
        
        cy.get("button[onclick='jsPrompt()']").click()
        //cypress automatic user button OK
    
        cy.get("#result").should('have.text','You entered: Hantn')
        })

   
    
    //4, Authentication Alert
    it('js Authentication alert',()=>{

        //approach1
       // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
          
       
       //approach2
       cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth", {auth:
                                                                                {
                                                                                    username:"admin",
                                                                                    password:"admin"
                                                                                }
    })


        cy.get("div[class='example'] p").should('have.contain','Congratulations')
                                                                    
    })
  
})