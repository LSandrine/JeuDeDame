function connexion() {
  var form='<form><p>'+
	'Nom d\'utilisateur : <input type="text" id="username" />'+
  ' Mot de passe : <input type="password" id="password" />'+
  '<input type="submit" id="submit" value="Se connecter !" />'+
  '</p></form>';
	$('#contenu').html(form);
}
$(document).ready(function(){
  connexion()
});
