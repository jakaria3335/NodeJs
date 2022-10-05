// const http = require("http");
// const colors = require("colors");
// const data = require("./data");
// const fs = require("fs");
// const path = require("path");

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
// const express = require('express')

// const app = express()
// const publicPath = path.join(__dirname,"public")
// console.log(publicPath)

// app.use(express.static(publicPath))

//  app.listen(5000)

//in this server you can access public folder. if you search http://localhost:5000/about.html then you can access about file. which is in the public folder. Note: never forget to add .html extension. otherwise won't work.

////////Template Engine /////////////////
///we use template engine to create a dynamic page////////
/////ejs template package///

//-----------Now we will learn how to access file without using exention---------////
// const express = require('express')

// const app = express()
// const publicPath = path.join(__dirname,"public")
// console.log(publicPath)
// app.set("view engine","ejs");

// app.get("",(_, res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get("/about",(_, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get("/help",(_, res)=>{
//     res.sendFile(`${publicPath}/help.html`)
// })
// app.get("/contact",(_, res)=>{
//     res.sendFile(`${publicPath}/contact.html`)
// })
// app.get("/login",(_, res)=>{
//     res.render("login.ejs")
// })
// app.get("/profile",(_, res)=>{
//     const user = [
//         {
//         name:"jakaria",
//         email:"jakaria@gmail.com",
//         city:"Narsingdi",
//         skills: ["php","js","c++"]
//     },
//         {
//         name:"jakaria2",
//         email:"jakaria2@gmail.com",
//         city:"Narsingdi2",
//     },
//         {
//         name:"jakaria3",
//         email:"jakaria3@gmail.com",
//         city:"Narsingdi3",
//     },
//         {
//         name:"jakaria4",
//         email:"jakaria4@gmail.com",
//         city:"Narsingdi4",
//     },
//         {
//         name:"jakaria5",
//         email:"jakaria5@gmail.com",
//         city:"Narsingdi5",
//     },
// ]
//     res.render("profile",{user});
// })
// app.get("*",(_, res)=>{
//     res.sendFile(`${publicPath}/notFound.html`)
// })

//  app.listen(5000)

//////////Make folder for Html and access it End ////////

////////////////Middleware understanding///////////////////

// middkeware is a modifier which is modify apis req & respons.
//this is application labal middleware

// const express = require('express')
// const app = express()

// const reqFilter = (req, res, next)=>{
//     const age = req.query.age;

//     if (!age) {
//         res.send("Insert age correctly!!!")
//     } else if(age<18) {

//         res.send("You can not access this page!!")
//     }
//     next()
// }

// app.use(reqFilter)

// app.get("/",(req, res)=>{
//     res.send("Welcome to home page")
// })
// app.get("/users",(req, res)=>{
//     res.send("Welcome to users page")
// })

//  app.listen(5000)

///this is route labal middleware

// const express = require('express')
// const app = express()

// const reqFilter = (req, res, next)=>{
//     const age = req.query.age;

//     if (!age) {
//         res.send("Insert age correctly!!!")
//     } else if(age<18) {

//         res.send("You are under aged!!")
//     }
//     next()
// }

// app.get("/",(req, res)=>{
//     res.send("Welcome to home page")
// });
// ///restricted route
// app.get("/users",reqFilter ,(req, res)=>{
//     res.send("Welcome to users page")
// });
// ///restricted route end
// app.get("/about",(req, res)=>{
//     res.send("Welcome to users page")
// });

//  app.listen(5000)

///Middleware from separate file

// const express = require('express')
// const reqFilter = require("./middleware")
// const app = express()

// app.get("/",(req, res)=>{
//     res.send("Welcome to home page")
// });
// ///restricted route
// app.get("/users",reqFilter ,(req, res)=>{
//     res.send("Welcome to users page")
// });
// ///restricted route end
// app.get("/about",(req, res)=>{
//     res.send("Welcome to users page")
// });

// app.listen(5000)

///Middleware on a group of route

// const express = require('express')
// const reqFilter = require("./middleware")
// const app = express()
// const route = express.Router()

// route.use(reqFilter)

// app.get("/",(req, res)=>{
//     res.send("Welcome to home page")
// });
// app.get("/users",(req, res)=>{
//     res.send("Welcome to users page")
// });

// route.get("/about",(req, res)=>{
//     res.send("Welcome to users page")
// });
// route.get("/contact",(req, res)=>{
//     res.send("Welcome to users page")
// });

// app.use("/", route)
// app.listen(5000)

//////////////////// Nodejs, Express & mongodb ////////////////////

////////////// Mongodb Connection in same File Start  /////////////////

// const express = require("express");
// const reqFilter = require("./middleware");
// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "e-comm";
// const client = new MongoClient(url);
// const app = express();
// const route = express.Router();

// route.use(reqFilter);

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("products");
// }

//Handle Promises

// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });
// // console.log(dbConnect())
//What is promise? When we are execude havy oparation or where oparation eill take lot of time then we will wait for this result.

//Handle Promises diffrent and new way
// const main= async ()=>{
//     let data= await dbConnect()
//     data = await data.find().toArray()
//     console.log(data)
// }
// main()

////////////// Mongodb Connection in same File end  /////////////////

////////////// Mongodb Connection in separate File Start  /////////////////


const dbConnect= require('./mongodb')

const main= async ()=>{
    let data= await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}
main()


////////////// Mongodb Connection in separate File End  /////////////////