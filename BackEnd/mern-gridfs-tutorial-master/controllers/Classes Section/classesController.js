const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { Classes } = require('../../models/Classes Section/ClassesSchema')

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://didactics.one/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
    Classes.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }
     });

 });

router.post('/MCQ-answers', (req, res) => {
  Classes.find({ "answertype" : "Multiple Choice"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Blanks-answers', (req, res) => {
  Classes.find({ "answertype" : "Fill in the Blanks"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/QA-answers', (req, res) => {
  Classes.find({ "answertype" : "Text"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Handwriting-answers', (req, res) => {
  Classes.find({ "answertype" : "Handwriting"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }
   });

});

router.post('/Pronunciation-answers', (req, res) => {
  Classes.find({ "answertype" : "Pronunciation"},(err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }
   });

});

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.

 router.post('/:id', (req, res) => {
     //Error checking
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');

    //Retreiving field through id, pass in the id as paramater of what we have reciveved through a button click or any event

    Classes.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Classess :' + JSON.stringify(err, undifines, 2)); }

    });

 });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new Classes({

        grade:req.body.grade,
        subjects:req.body.subjects,  
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in Classes Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });

 //Building router for updating with router.put


 router.post("/:id", (req, res) => {
    const id = req.params.id;
    Classes.findById(id, (err, answer) => {
      if (!answer) {
        res.status(404).send("question not found");
      } else {

        answer.name = req.body.name,
        answer.answertype = req.body.answertype,
        answer.questionTitle = req.body.questionTitle,
        answer.questionContent = req.body.questionContent,
        answer.answerContent = req.body.answerContent,
        answer.optionsQuestionMcq = req.body.optionsQuestionMcq,
        answer.optionsQuestionFillInTheBlank = req.body.optionsQuestionFillInTheBlank,
        answer.totalMarks = req.body.totalMarks,
        answer.marksObtained = req.body.marksObtained,
        answer.teacherRemarks = req.body.teacherRemarks,

        answer
          .save()
          .then((answer) => {
            res.json(answer);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });


 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Classes.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Classess Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;


 //We have to configure these routes in the root file which is index.js


