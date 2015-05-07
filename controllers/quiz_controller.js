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
