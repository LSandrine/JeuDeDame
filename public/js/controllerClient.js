//socket= io.connect();
var session;
var pseudo;
var partieEnCours;
$(document).ready(function(){
  updateSession();
  setInterval(refreshPlateau, 300);
  setInterval(getMessagesList,1000);
  setInterval(getPlayers, 300);
  setInterval(SearchPlay, 400);
  if(session.userId){
    if(session.play==1){
      getGames();
      plateau();
    }else{
      lobby();
    }
  }
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
function refreshPlateau(){
  if(session.play==1){
    if(session.userId==partieEnCours.player1){
      if(partieEnCours.tour==2)getGames();
    }else{
      if(partieEnCours.tour==1)getGames();
    }
  }
}
function SearchPlay(){
  if(session.play!=1)getGames();
}

function game(){
  proposerUnGame($(this).attr('id'));
};
/*
//marche pas ???????????????????????????
window.onbeforeunload = function (){
		alert("On passe");
}*/
