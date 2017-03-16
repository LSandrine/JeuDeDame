//socket= io.connect();
var session;
var pseudo;
$(document).ready(function(){
  updateSession();
  setInterval(getMessagesList, 100);
  setInterval(getPlayers, 100);
  if(session.userId)lobby();
  else connexion();
  $('body').on("click","#startPartie",plateau);
  $('body').on("click",".playWitch",game);
  $('body').on("click","#sendMess",envoiDeMessage);
  $('body').on('click',"#submit",postConnection);
});


function updateSession(){
  session=getSession();
  if(session.userName)pseudo=session.userName;
  else pseudo='anonyme';
}

function game(){
  //proposeGame($(this).attr('id'));
};
/*
//marche pas ???????????????????????????
window.onbeforeunload = function (){
		alert("On passe");
}*/
