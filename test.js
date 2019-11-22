const  testobj = {
    name: "jon jon",
    age: null,
    height: "6 something"
}

const containsNull = (json_obj) => {
    for(el in json_obj){
        if(json_obj[el] === null) return true 
    }
    return false
}

console.log( containsNull(testobj) )