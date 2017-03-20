// ////////////////////////////////////////////// A C C U E I L
var model = require("../models/bd.js");
var messages = [];
var players = [];
var demandesParties = [];
var game=[];
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
          request.session.play=0;
         console.log(request.session.userId);
         players.push({ 'id' : request.session.userId, 'login' : request.session.userName ,'play' : 0 });
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
module.exports.GetGames = function(request, response){
  response.send(game);
};
module.exports.GetPropose = function(request, response){
  response.send(demandesParties);
};
module.exports.EnvoiDeMessage = function(request, response){
    var login='anonyme';
    if(request.session.userName)login=request.session.userName;
    var message=login+': '+request.body.message;
    if(messages.length>30)messages.shift();
    messages.push(message);
    response.send('send');
};
module.exports.ProposerUnGame = function(request, response){
  demandesParties.push(request.body);
  response.send('propose');
};
module.exports.AcceptGame = function(request, response){
 var   plateauInit =[[0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0]];
  var gameNew={ 'player1' : request.body.player1, 'player2' : request.body.player2, 'plateau' : plateauInit }
  game.push(gameNew);
  console.log(game);
  request.session.play=1;
  response.send('playStart');
};
module.exports.SetPlay = function(request, response){
  request.session.play=request.body.play;
  response.send('playSet');
  for(i=0;i<players.length;i++){
    if(players[i].id==request.session.id){
      players[i].play=1;
    }
  }
};
module.exports.SupprimerUnGame = function(request, response){
  var z=-1;
  for(i=0;i<demandesParties.length;i++){
    if(demandesParties[i].toString()==request.body.toString()){
      z=i;
    }
  }
  if(z!=-1)demandesParties.splice(z,1);
  console.log(demandesParties);
  response.send('delete');
};
