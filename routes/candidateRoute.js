const router=require('express').Router();
const candidateController=require('../controller/candidateController')
router.get('/all',candidateController);


module.exports=router
