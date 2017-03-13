var socket = io.connect();
var session;
var pseudo;
$(document).ready(function(){
  updateSession()
  if(session.userId)controllerLobby();
  else connexion();
  $('body').on("click","#startPartie",afficherPlateau);

});
function controllerLobby(){
  $('#content').html(lobby());
  $('title').text('lobby jeu de dame');
};

function afficherPlateau(){
  $('#content').html(plateau());
  $('title').text('Plateau du jeu');
  //$('.pion').draggable();
  //$('.case').droppable();
};

function updateSession(){
  session=getSession();
  if(session.userName)pseudo=session.userName;
  else pseudo='anonyme';
}
