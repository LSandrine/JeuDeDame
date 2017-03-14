//socket listener :
//-------------------------messages----------------------------//

socket.on('recupererMessages', function (messages) {
  var html = '';
  for (var i = 0; i < messages.length; i++)
    html += '<div class="line"><b>'+messages[i].pseudo+'</b> : '+messages[i].message+'</div>';
    $('#tchat').html(html);
});
socket.on('recupererNouveauMessage', function (message) {
    $('#tchat').append('<div class="line"><b>'+message.pseudo+'</b> : '+message.message+'</div>');
});
function envoiMessage(mess) {
  var message = $('#message').val();
  socket.emit('nouveauMessage', { 'pseudo' : pseudo, 'message' : message });
  $('#tchat').append('<div class="line"><b>'+pseudo+'</b> : '+message+'</div>');
  $('#message').val('');
  return false;
};
//-------------------------players----------------------------//
socket.on('recupererPlayers', function (players) {
  var html = '<tr><th>id</th><th>nom</th><th>statut</th></tr>';
  for (var i = 0; i < players.length; i++){
    var statut='<button class="playWitch" id="'+players[i].id+'">Proposer jouer</button>';
    if(players[i].statut!='disp'){
      statut=players[i].statut;
    }
    if(players[i].id==session.userId){
      statut="vous";
    }
    html += '<tr><th>'+players[i].id+'</th><th>'+players[i].login+'</th><th>'+statut+'</th></tr>';
  }
  $('#player').html(html);
});
socket.on('recupererNouveauPlayer', function (player) {
  var statut='<button class="playWitch" id="'+player.id+'">Proposer jouer</button>';
  if(player.statut!='disp'){
    statut=player.statut;
  }
  if(player.id==session.userId){
    statut="vous";
  }
  $('#player').append('<tr><th>'+player.id+'</th><th>'+player.login+'</th><th>'+statut+'</th></tr>');
});
function envoiPlayer() {
  socket.emit('nouveauPlayer', { 'id' : session.userId, 'login' : session.userName ,'statut' : 'disp' });
  socket.emit('ListPlayers');
  return false;
};
function ListPlayers(){
  socket.emit('ListPlayers');
}
socket.on('ListOfPlayers', function (players) {
  var html = '<tr><th>id</th><th>nom</th><th>statut</th></tr>';
  for (var i = 0; i < players.length; i++){
    var statut='<button class="playWitch" id="'+players[i].id+'">Proposer jouer</button>';
    if(players[i].statut!='disp'){
      statut=players[i].statut;
    }
    if(players[i].id==session.userId){
      statut="vous";
    }
    html += '<tr><th>'+players[i].id+'</th><th>'+players[i].login+'</th><th>'+statut+'</th></tr>';
  }
  $('#player').html(html);
});

//-------------------------games----------------------------//
function proposeGame(id) {
  socket.emit('proposeGame', { 'id' : session.userId, 'login' : session.userName, 'adverse' : id });
  return false;
};
socket.on('demandeGame', function (player) {
  if(player.adverse==session.userId){
    if (confirm("acceptez vous une partie avec "+player.login+" ?")) {
      alert("oui")
    }
    else {
      alert("non")
    }
  }
});
