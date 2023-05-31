
describe ("handle file Upload",()=>{

    //install file upload plugin :npm install --save-dev cypress-file-upload

    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        //select file upload trong thư mục fitures
            cy.get("#file-upload").attachFile('test1.png')
            cy.get("#file-submit").click()
            cy.wait(5000)

            cy.get(".example>h3").should('have.text','File Uploaded!')

    })

    it('single file upload- Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        //select file upload trong thư mục fitures 
            cy.get("#file-upload").attachFile({filePath:'test1.png',fileName:'mytest.png'})
            cy.get("#file-submit").click()
            cy.wait(5000)

            cy.get(".example>h3").should('have.text','File Uploaded!')

    })

    it('single file upload- Drag and Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").attachFile('test1.png', { subjectType: 'drag-n-drop' })
        cy.get(".dz-filename").contains('test1.png')
    })

    it('upload mutiple file',()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['test1.png','test2.png'])
        cy.wait(5000)

        cy.xpath("//strong[normalize-space()='Files You Selected:']").should('have.text','Files You Selected:')

    })

    

    it.only('File Upload - Shadow Dom', ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile('test1.png');
        cy.wait(2000);
        cy.get(".smart-item-name", {includeShadowDom:true}).contains('test1.png');
    })

})