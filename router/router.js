var MainController = require('../controllers/MainController');
module.exports = function(app){

    app.get('/controller/getSession', MainController.GetSession);
    app.get('/controller/getPlayers', MainController.GetPlayers);
    app.get('/controller/getMessages', MainController.GetMessages);
    app.post('/controller/postConnection', MainController.Connexion);
    app.post('/controller/envoiDeMessage', MainController.EnvoiDeMessage);


    app.post('*', MainController.Index);
    app.get('*', MainController.Index);
    app.get('/', MainController.Index);
};
