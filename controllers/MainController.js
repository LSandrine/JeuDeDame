// ////////////////////////////////////////////// A C C U E I L
module.exports.Index = function(request, response){
   response.title ="Jeu de dames"
 response.render('home', response);
};
module.exports.Connexion = function(request, response){
   response.title ="Jeu de dames connexion"
 response.send('ok');
};
