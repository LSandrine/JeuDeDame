
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
$(document).ready(function(){
  $('body').on("click","#sendMess",envoiMessage);
});
