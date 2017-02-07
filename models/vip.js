var db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.firstletter = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT DISTINCT SUBSTRING(VIP_NOM,1,1) AS letter FROM vip ORDER BY letter ASC ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
