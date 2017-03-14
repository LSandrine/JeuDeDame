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
