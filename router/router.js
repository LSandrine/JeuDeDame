var HomeController = require('../controllers/MainController');

module.exports = function(app){

    // Main Routes
//racine
    app.get('/', HomeController.Index);
// pagepourplustard



  app.get('*', HomeController.Index);
  app.post('/controller/postConnection', HomeController.Connexion);
  app.post('*', HomeController.Index);

};
