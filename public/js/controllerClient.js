$(document).ready(function(){
  connexion();
  $('body').on("click","#startPartie",afficherPlateau);
});
function controllerLobby(){
  $('#contenu').html(lobby());
  $('title').text('lobby jeu de dame');
}

function afficherPlateau(){
  $('#contenu').html(plateau());
  $('title').text('Plateau du jeu');
}
