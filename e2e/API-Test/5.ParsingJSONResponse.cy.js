describe("api test",()=>{

    it("parsing json response",()=>{

        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products'
        }).then((response)=>{

            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].rating.rate).to.equal(3.9)

            expect(response.status).to.equal(200)
            expect(response.body[18].id).to.equal(19)
            expect(response.body[18].title).to.equal("Opna Women's Short Sleeve Moisture")
            expect(response.body[18].rating.rate).to.equal(4.5)
        })
    })
    it.only("parsing json response- verify total price of 5 elements",()=>{

        let TotalPrice=0
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
            qs:{limit:5}
        }).then((response)=>{

            expect(response.status).to.equal(200)
            response.body.forEach(element => {
                TotalPrice=TotalPrice+ element.price
            })
            expect(TotalPrice).to.equal(899.23)
        })
    })

})