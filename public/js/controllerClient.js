$(document).ready(function(){
  connexion();
});
function controllerLobby(){
  $('#contenu').html(lobby());
  $('title').text('lobby jeu de dame');
}
