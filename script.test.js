const searchgoogle = require("./script1")

dbMock=[
    "dogfav1.com",
    "dogfav2.com",
    "dogfav3.com",
    "birds.com",
    "food.com",
    "disney.com"
]

describe("Google Search",()=>{
    it("It's a silly test :_)",()=>{
        expect("hello").toBe("hello")
    })
    
    it("This is the Test of GoogleSearch",() =>{
        expect(searchgoogle("birds",dbMock)).toEqual(['birds.com']) 
    })
    
    it("It should work with undefined and null",() =>{
        expect(searchgoogle(undefined,dbMock)).toEqual([]) 
        expect(searchgoogle(null,dbMock)).toEqual([]) 
    })
    
    it("To check whether we have more than 3",() =>{
        expect(searchgoogle(".com",dbMock).length).toEqual(6) 
    })

    
})
