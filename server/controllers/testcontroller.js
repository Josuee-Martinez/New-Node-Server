var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

router.post('/one', function(req, res) {
    res.send('test 1 went through!');
});
  
router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
      function createError(err) { //1
        res.send(500, err.message);
      }
    );
});

router.get('/helloclient', function(req, res) {
  res.send('this is a message from the server to the client.')
})

router.get('/one', function(req, res) {
  TestModel.findAll({
    attributes: ['id', 'testdata']
  }).then(function findAllSuccess(data) {
    console.log('Controller data:', data);
    res.json(data);
  },
  function findAllError(err) {
    res.send(500, err.message);
  }
  );
});

module.exports = router;

  // router.post('/two', function(req, res) {
    //   let testData = 'test date from endpoint two';
    
    //   TestModel.create({
      //     testdata: testData
      //   }).then(dataFromDatabase => {
        //     res.send('test two went through');
        //   });
        // });
        
        // router.post('/three', function(req, res) {
          //   var testData = req.body.testdata.item;
          
          //   TestModel.create({
            //     testdata: testData
            //   })
            //   res.send('test three went through!');
            //   console.log('test three went through!');
            // })
            // // router.get('/', function(req, res) {
              //   //   res.send('Hey!!! This os a test route');
              // // });
              
              // // router.get('/about', function(req, res) {
                // //   res.send('Hey!!! This is the about page');
                // // });
                
                // // router.get('/contact', function(req, res) {
                  // //   res.send({user: 'josue', number: '9999999'});
                  // // });
                  
                  // // router.get('/project', function(req, res) {
                    // //   res.send(['pern', 'mern']);
                    // // });
                    
                    // // router.get('/mycontacts', function(req, res) {
                      // //   res.send([{ana: '9999'}, {loco: '131313'}, {john: '95757'}]);
                      // // });
                      
                      
                      // router.post('/four', function(req, res) {
                        //   var testData = req.body.testdata.item;
                        
                        //   TestModel.create({
                          //     testdata: testData
                          //   })
                          //   .then(function message() {
                            //     res.send('test four went through!')
                            //   })
                            // })
                            
                            // router.post('/five', function(req, res) {
                              //   var testData = req.body.testdata.item;
                              
                              //   TestModel.create({
                                //     testdata: testData
                                //   })
                                //   .then(function message(data) {
                                  //     res.send(data);
                                  //   });
                                  // });
                                            // router.post('/six', function (req, res) {
                                            //   var testData = req.body.testdata.item;
                                            //   TestModel
                                            //     .create({
                                            //       testdata: testData
                                            //     })
                                            //     .then(
                                            //       function message(testdata) {
                                            //         res.json({ //1
                                            //           testdata: testdata  //2
                                            //         });
                                            //       }
                                            //     );
                                            // });