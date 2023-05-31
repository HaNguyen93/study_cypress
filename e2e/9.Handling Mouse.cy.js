
//dung iframe phai cai dat-----> npm install -D cypress-iframe
describe('handing mouse',()=>{

    it('mouse hove',()=>{

        cy.visit("https://demo.opencart.com/")

        cy.xpath("//a[normalize-space()='Mac (1)']").should('not.be.visible')
        
        cy.xpath("(//li[@class='nav-item dropdown'])[1]").trigger('mouseover').click()

        cy.xpath("//a[normalize-space()='Mac (1)']").should('be.visible')

    })

    it('right click',()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //approach1
        //cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        //cy.get(".context-menu-icon-copy").should('be.visible')

        //approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-icon-copy").should('be.visible')    
    
    })

    it('double click',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")//loadingg iframe

        /*
        //approach1
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')*/

        //approach2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')

    })

    it('drag and drop using plugin',()=>{

        //install plugin drap anh drop: npm install --save-dev '@4tw/cypress-drag-drop'
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").should('have.visible')
        cy.get("#box106").should('have.visible')

        cy.get("#box6").drag("#box106",{force: true})

    })

    it.only('scroll mouse',()=>{

        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")
        cy.get("img[src='/img/flags/small/tn_vm-flag.gif']").scrollIntoView({duration:2000})
        cy.get("img[src='/img/flags/small/tn_vm-flag.gif']").should('have.visible')
    })

})