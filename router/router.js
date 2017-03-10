var MainController = require('../controllers/MainController');

module.exports = function(app){

    // Main Routes
//racine
    app.get('/', MainController.Index);
    app.post('/controller/postConnection', MainController.Connexion);
    app.get('/controller/getSession', MainController.GetSession);
// pagepourplustard
  app.get('*', MainController.Index);
  app.post('*', MainController.Index);

};
