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
//connexion jeu
module.exports.connexion = function(data,callback){
  db.getConnection(function (err, connexion) {
    if(!err){
      var sql = "SELECT id_user ,login as name_user FROM USERS WHERE login='"+data.user+"' and mdp='"+data.pwd+"';";
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.getNomJoueur = function(callback){
  db.getNoms(function (err, connexion) {
    if(!err){
      var sql = "SELECT u.login as joueur1,u2.login as joueur2, s.id_user1 , s.id_user2 FROM SESSION s JOIN USERS u ON u.id_user = s.id_user1 JOIN USERS u2 ON u2.id_user = s.id_user2; "
      console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};
