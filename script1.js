const GoogleDataBase = [
    "catsfav1.com",
    "catsfav2.com",
    "catsfav3.com",
    "animals.com",
    "soup.com",
    "amazon.com"
]
 // Google Algorithm
const searchgoogle =(SearchInput,db)=>{
    const matches = db.filter((website)=>
    { return website.includes(SearchInput)

    }) 
    return matches.legnth>3 ? matches.slice(0,3):matches
}
// console.log(GoogleSearch("amazon"))

module.exports=searchgoogle