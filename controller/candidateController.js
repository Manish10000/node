
const candidateController=(req,res)=>{
    return res.status(200).json({status:true,data:[{id:1,name:"mrutyu"},{id:2,name:'Udaya'}]});
}

module.exports=candidateController