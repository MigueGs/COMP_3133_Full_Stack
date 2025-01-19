const fs = require('fs')


var data = "I am appending file" 
fs.appendFile('output.txt', "", (err) => {
    if(err){
        console.log(err.message)
        return
    }

    console.log("Data Append success")
})

function readData(){
    try{
        const data = fs.readFile("input.txt")
        console.log(data.toString())
    }catch(error){
        console.log(error)
    }
}