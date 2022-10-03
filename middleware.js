module.exports= reqFilter = (req, res, next)=>{
    const age = req.query.age;

    if (!age) {
        res.send("Insert age correctly!!!")
    } else if(age<18) {
        
        res.send("You are under aged!!")
    }
    next()
}
