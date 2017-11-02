var express = require('express');
var router = express.Router();

var homeAdData = require('../mockData/home/ad.js')

/* GET home page. */
router.get('/ad', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    
    res.json({
        status:"200",
        result:{
            data: homeAdData
        }             
    })
  
});

module.exports = router;