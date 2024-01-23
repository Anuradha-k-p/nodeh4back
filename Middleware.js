const jwt=require('jsonwebtoken')
const secretkey='Sp28'
const auth=(req,res,next)=>{
    const data=req.headers["authorization"]
    console.log(data,"token")
const token=data.split(' ')[1]
console.log(token)
    if(token){
        jwt.verify(token,secretkey,(err,decoded)=>{
           if(err){
            return res.send("Error in aceesing Token",err)
        }
        if(decoded){
            return next()
        }
        else{
            return res.send("User is not Authorised")
        }
        })
       
    }
    else{
        return res.send({msg:"Email not Registered"})    
    }

}

module.exports=auth