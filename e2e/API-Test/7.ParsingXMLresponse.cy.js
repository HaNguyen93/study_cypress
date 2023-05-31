//install xml2js library : npm install xml2js
//npm install xml2js
const xml2js= require("xml2js")
const parser=new xml2js.Parser( {explicitArray:false})

describe("XML parsing",()=>{
    let xmlPayload="<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>string</name> 	</Category> 	<name>doggie</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"
    let pet_id=null
    it("create pet",()=>{

        cy.request( {
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:xmlPayload,
            headers:{
                'Content-Type':'application/xml',
                'accept':'application/xml'
            }
        }).then( (response)=>{
            expect(response.status).to.equal(200)
            parser.parseString(response.body,(err,result)=>{
                pet_id=result.Pet.id
            })
        })
    })


    it("fetching pet",()=>{

        cy.request( {
            method:'GET',
            url:'https://petstore.swagger.io/v2/pet/'+pet_id,
           
            headers:{
                
                'accept':'application/xml'
            }
        }).then( (response)=>{
            expect(response.status).to.equal(200)
            parser.parseString(response.body,(err,result)=>{
                expect(result.Pet.id).to.equal(pet_id)
                expect(result.Pet.name).to.equal('doggie')
            })
        })
    })
})