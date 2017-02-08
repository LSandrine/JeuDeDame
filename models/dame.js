var db = require('../configDb');

//contenu du tableau du lobby
module.exports.lobbytab = function(callback){
  db.getConnection(function (err, connexion) {
    if(!err){
      var sql = "SELECT id_session, login FROM USER INNER JOIN SESSION ON SESSION.id_session=USER.id_session"
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
//ajout session boutton
module.exports.lobbybut = function(callback){
  db.getConnection(function (err, connexion) {
    if(!err){
      var sql = "INSERT INTO SESSION (id_user1) VALUES ()"//A FAIRE récupérer l'id du gars log
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
//rejoindre session boutton
module.exports.lobbyre = function(callback){
  db.getConnection(function (err, connexion){
    if(!err){

      var sql = "INSERT INTO SESSION (id_session,id_user2) VALUES ()"//A FAIRE récupérer l'id du gars log
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
