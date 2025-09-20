const notfound = (req,res)=>
{
    res.status(400).json({message:"not found"});
}

module.exports= notfound;