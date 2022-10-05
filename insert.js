const dbConnect = require('./mongodb')

const insert =async()=>{
    const db = await dbConnect()
    const result = await db.insert(
        [
            {name:"Iphone 13 Pro Max", brand:"Apple",price:999, category:"smart-Phone" },
            {name:"Iphone 14 Pro Max", brand:"Apple",price:111, category:"smart-Phone" },
            {name:"Iphone 15 Pro Max", brand:"Apple",price:222, category:"smart-Phone" },
            {name:"Iphone 16 Pro Max", brand:"Apple",price:333, category:"smart-Phone" },
            {name:"Iphone 17 Pro Max", brand:"Apple",price:4444, category:"smart-Phone" },
        ]
    )
if (result.acknowledged) {
        console.log("Product Inserted Successfully")
}}
insert();