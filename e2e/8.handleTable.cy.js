describe('handle table',()=>{

    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/")
        cy.get("input[name='username']").type('demo')
        cy.get("input[name='password']").type('demo')
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()
        //customer
        cy.get("li#menu-customer").click()
        cy.get("#menu-customer>ul>li:first-child").click()

    })

    it.skip('check number row and number colum',()=>{
        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10')
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length','7')

    })

    it.skip('check cell data ',()=>{
        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)").should('have.text','princytrainings4@gmail.com')
       

    })

    it.skip('read data all the row and colums data in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows)=>{

            cy.wrap($row).within( ()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })

    })
    it('Pagination',()=>{
        //find total number of page
        // let totalPage
        // cy.get(".col-sm-6.text-end").then((e)=>{
        //     let mytext=e.text();//Showing 1 to 10 of 12700 (1270 Pages)
        //     totalPage=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
        //     cy.log("Total number of page in a table====>"+totalPage)
        // })

        let totalPage=5
        for(let p=1;p<=totalPage;p++){
            if(totalPage>1){
                cy.log("active page is====>"+p)
                cy.get("ul.pagination>li:nth-child("+p+")").click()
                cy.wait(3000)

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row,index,$rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get('td:nth-child(3)').then((e)=>{
                                cy.log(e.text())//in email
                            })
                        })

                    })
            }
        }
    })


})