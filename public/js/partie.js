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
