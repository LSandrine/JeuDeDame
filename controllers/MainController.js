// ////////////////////////////////////////////// A C C U E I L
var model = require("../models/bd.js");
var messages = [];
var players = [];

module.exports.Index = function(request, response){
   response.title ="Jeu de dames"
 response.render('home', response);
};
module.exports.Connexion = function(request, response){
    response.title ="Jeu de dames connexion";
    var data={pwd :request.body.password ,user : request.body.username };
    model.connexion(data,function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
       rep="deny";
       if(result[0]){
         request.session.userId=result[0].id_user;
         request.session.userName=result[0].name_user;
         console.log(request.session.userId);
         players.push({ 'id' : request.session.userId, 'login' : request.session.userName ,'statut' : 'disp' });
         console.log(players);
         rep="accept";
       }
       response.send(rep);
     });

};
module.exports.GetSession = function(request, response){
  response.send(request.session);
};
module.exports.GetPlayers = function(request, response){
  response.send(players);
};
module.exports.GetMessages = function(request, response){
  response.send(messages);
};
module.exports.EnvoiDeMessage = function(request, response){
    var login='anonyme';
    if(request.session.userName)login=request.session.userName;
    var message=login+': '+request.body.message;
    if(messages.length>30)messages.shift();
    messages.push(message);
    response.send('send');
};
