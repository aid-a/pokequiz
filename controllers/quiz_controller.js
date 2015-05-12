var models = require('../models/models.js')

//GET /quizes/:id
exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', { quiz: quiz});
	})
};

//GET /quizes/:id/answer
exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){ 
		if (req.query.respuesta === quiz.respuesta){
			res.render('quizes/answer',
				{ quiz: quiz, respuesta: "Correcto, ¡qué friki eres!"});
		} else {
			res.render('quizes/answer', 
				{ quiz: quiz, respuesta: 'Incorrecto :('});
		}
	})
};

exports.index = function(req, res) {
	models.Quiz.findAll().then(function(quizes) {
		res.render('quizes/index.ejs', { quizes: quizes});
	})
};


exports.author = function(req, res){
	res.render('author');
};


//get /quizes
exports.index = function(req, res){
    if(req.query.search){
        models.Quiz.findAll({where: ["pregunta like ?", '%'+req.query.search+'%'], order: 'pregunta ASC'})
        .then(function(quizes){
             res.render('quizes/index.ejs', {quizes: quizes, title: 'Listado', errors: [] })}).catch(function(error) { next(error);});
    }else{
    models.Quiz.findAll().then(function(quizes){
        res.render('quizes', {quizes: quizes, errors:[]});
    }).catch(function(error){ next(error);})
}
    
};

//Autoload - factoriza el código si ruta incluye :quizId

exports.load = function(req, res, next, quizId){
  models.Quiz.find(quizId).then(
    function(quiz) {
      if(quiz){
        req.quiz = quiz;
        next();
      } else { next (new Error ('No existe quizId=' + quizId));}
    }
  ).catch(function(error){ next(error);});
};
