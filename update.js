const dbConnect = require('./mongodb')

const update =async()=>{
    const db = await dbConnect()
    const result = await db.updateOne(

            {name:"Iphone 13 Pro Max"}, {$set:{name:"Iphone 13 Pro Max updated"}}
    )
if (result.acknowledged) {
        console.log("Product updated Successfully")
}}
update();