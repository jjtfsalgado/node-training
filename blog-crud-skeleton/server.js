var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    articles = require('./controllers/articles'),
    app = express();

//CRUD
//CREATE READ UPDATE DELETE

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

var notImplimented = function(req,res){
  res.sendStatus(501)
}

//articles
app.get('/articles', articles.index); //show them all blog posts
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplimented); //reading one
app.post('/articles', articles.create); //making a new one
app.put('/articles/:articleId', notImplimented); //updating one
app.delete('/articles/:articleId', notImplimented); //deleting one

//comments
app.post('/articles/:articleId/comments', notImplimented);
app.delete('/articles/:articleId/comments/:commentId', notImplimented);

app.listen(3000, function () {
  console.log("server is running on 3000");
});
