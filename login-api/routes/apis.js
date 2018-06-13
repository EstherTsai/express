var express = require('express');
var router = express.Router();

router.route('/login') // 輸入id當作參數
.get(function(req, res) {
    res.json({
        message: 'Welcome'
    })
})

.post(function(req, res) {
    if (req.body.name === "Louis"  && req.body.password === "1234")
    {
        res.json({
            message: 'Login success! Welcome ' + req.body.name
        })
    }
    else{
        res.send(err);
    }
})
module.exports = router;
