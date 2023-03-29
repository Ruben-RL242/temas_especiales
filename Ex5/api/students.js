const express = require('express');
const router = express.Router();

router.get('/' , (_,res) => {
    res.send({
        message: 'get all the students'
    });
});

router.post('/' , (req,res) => {
    const body = req.body;
    console.log(req);
    res.send({
        message: 'create a student',
        body,
        message: `asd: ${req}`
    });
});

module.exports=router;