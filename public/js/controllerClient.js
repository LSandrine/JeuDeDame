socket= io.connect();
var session;
var pseudo;
$(document).ready(function(){
  updateSession();
  if(session.userId){
    controllerLobby();
  }
  else connexion();
  $('body').on("click","#startPartie",afficherPlateau);
  $('body').on("click",".playWitch",game);
  $('body').on("click","#sendMess",envoiMessage);
});
function controllerLobby(){
  updateSession();
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

function game(){
  proposeGame($(this).attr('id'));
}

//marche pas ???????????????????????????
window.onbeforeunload = function (){
		alert("On passe");
}
