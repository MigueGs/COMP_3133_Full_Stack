const fs =  require('fs')

var data = Buffer.from("Hello from Miguel ")
fs.writeFile("output.txt", data , (err) => {
    if(err){
        console.log(err.message)
        return
    }

    console.log('Data written successfully...')
})

data = "Testing...."
var error = fs.writeFileSync('output.txt', data)
console.log("Data written...")