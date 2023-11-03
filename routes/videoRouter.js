const express = require('express')

const videoRouter = express.Router();

videoRouter.get('/videos',function(req, res){
    return res.send([{id: "1", link : "Some Video Link"}])
})

videoRouter.post('/videos',function(req, res){
    console.log(req.body);
    return res.send({body: req.body, response: "Success"});
})
module.exports = videoRouter;