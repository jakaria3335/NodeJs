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

// ------------------------------CURD End-------------------------

