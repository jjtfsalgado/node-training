var articles = [];

module.exports.create = function(req,res) {
  req.body.comments = [];
  articles.push(req.body);
  res.redirect('/articles');
};

module.exports.index = function(req, res) {
  res.json(articles);
}
/*
  a post is going to look like this:
  {
    title:"",
    body:"",
    author:"",
    comments:[]
  }

  a comment would look like
  {
    name:"foo",
    text:"blablabla"
  }

*/

module.exports.new = function (req,res) {
  res.send("<form method='post' action='/articles'>\
              <input type='text' placeholder='title' name='title'/>\
              <input type='text' placeholder='author' name='author'/>\
              <textarea name='body'></textarea>\
              <button type='submit'>Post!</button>\
            </form>");
};
