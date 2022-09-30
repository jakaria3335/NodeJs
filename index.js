const http = require("http");
const colors = require("colors");
const data = require("./data");
const fs = require("fs")
const path = require("path")

//http server
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data));
//     res.end()

// }).listen(4500);
// console.log("package".red);

// Single file creating
// fs.writeFileSync("apple.txt", "This is apple file");

// const dirPath = path.join(__dirname,"files");
// console.log(dirPath)

//create files using loop:
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath+"/Hello"+ i + ".txt","Simple text files created by loop "+i+" is file Number")
// }


// Read files: 
// fs.readdir(dirPath,(err, files)=>{
//     // console.log(files)
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })

// ------------------------------CURD Start-------------------------
//Node CRUD & rename Oparations:

// //Create files:
// const curdPath = path.join(__dirname,"curd")
// const filePath = `${curdPath}/sample.text`

// fs.writeFileSync(filePath,"This is a sample files")

// // Read Files:
// const curdPath = path.join(__dirname,"curd")
// const filePath = `${curdPath}/sample.text`
// fs.readFile(filePath,"utf8",(err,files)=>{
//     console.log(files)
// })

// // Update Files:
// const curdPath = path.join(__dirname,"curd")
// const filePath = `${curdPath}/sample.text`

// fs.appendFile(filePath," And Updated Text.",(err)=>{
//     if (!err) {
//         console.log("file is updated")
//     }
// })

// // Rename Files: 
// const curdPath = path.join(__dirname,"curd")
// const filePath = `${curdPath}/sample.text`

// fs.rename(filePath, `${curdPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("File rename successful")
//     }
// } )

// // Delete files: 

// const curdPath = path.join(__dirname,"curd")
// const filePath = `${curdPath}/sample.text`

// fs.unlink(filePath,(err)=>{
//     if(!err){
//         console.log("File delated Successfully")
//     }
// })

// // ------------------------------CURD End-------------------------

// // ------------------Sync & Async Sample--------------------

// console.log("1st File");

// setTimeout(()=>{
//     console.log("this is 2nd file")
// },3000)

// console.log("This is 3rd File")

// // --------------Another Drow Back Sample-------------------
// let a = 10
// let b = 0

// setTimeout(()=>{
//     b=20
// }, 3000)

///////Output should be 30 but output is 10//////////
// console.log(a+b)



// // Promises fix drow back
// let a = 10
// let b = 0

// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     }, 3000)
// })
// waitingData.then((data)=>{
//     b= data
//     console.log(a+b)
// })


////////////////////////// Call Stack //////////////////
/////////// full app in Main() fuction./////////
///Call stake register all fuctions and 1st is main() then all function from app.////////// here is the example is console log calls from call stack not going to node apis or event logs, so console log print 1st, other function like setTimeOut which is a C++ function. setTimeout works like call stack then node apis then event log. so its little delays for console log. 

// console.log("Starting up")

// setTimeout(()=>{
// console.log("2 secound log")
// },2000)

// setTimeout(()=>{
// console.log("0 secound log")
// },0)

// console.log("Finishing up")
////////////////////////// Call Stack END //////////////////





////////////////////// Starting Express Js ///////////////////

//////////this is basic express server////////

// const express = require('express')
// const app = express()

// app.get('',(req, res)=>{
//     res.send("Welcome to my new express home page")
// })
// app.get('/about',(req, res)=>{
//     res.send("Hello this is express About page")
// })
// app.get('/help',(req, res)=>{
//     res.send("Hello this is express help page")
// })

// app.listen(5000)

//////////server end////////


//////////Req and res////////

// response = server 
// request = clint

// that means server always gives response. Clint always request.

// If we want to bring any data from clint site or form then we use req perametar. 

// if we want to show someting to out clint then we use response. 


// for example::
//sent data via browser like: http://localhost:5000/?name=Jakaria
// const express = require('express')
// const app = express()
// app.get('',(req, res)=>{
//     console.log("Data sent by Browser>>>>", req.query.name)
//     res.send("Welcome Mr./Mrs. " + req.query.name)
// })
// app.listen(5000)

//////////Req and res end ////////


//////////Render Html tag Start ////////
// const express = require('express')
// const app = express()
//////////how to show html tags//////
// app.get('',(req, res)=>{
//     res.send("<h1>Welcome to my new express home page</h1>")
// })

////////////how to show input tag////////
// app.get('/about',(req, res)=>{
//     res.send(`
//     <input type="text" placeholder="User name"/>
//     <button>Click me</button>
//     `)
// })
/////how to show json data///
// app.get('/help',(req, res)=>{
//     res.send([
//         {
//         "name":"Jakaria",
//         "email":"jakariatest.com",
//         },
//         {
//         "name":"Nayeem",
//         "email":"nayeem.com",
//         },
//         {
//         "name":"toli",
//         "email":"toli.com",
//         },
// ])
// })
// app.listen(5000)

//////////Render Html tag end ////////





//////////Make folder for Html and access it start ////////
const express = require('express')

const app = express()
const publicPath = path.join(__dirname,"public")
console.log(publicPath)

app.use(express.static(publicPath))




app.listen(5000)
//////////Make folder for Html and access it End ////////