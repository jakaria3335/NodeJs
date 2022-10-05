const dbConnect = require('./mongodb')

const deleteItem =async()=>{
    const db = await dbConnect()
    const result = await db.deleteOne(
            {name:"Iphone 13 Pro Max updated"}
        )
if (result.acknowledged) {
        console.log("Product deleted Successfully")
}}
deleteItem();