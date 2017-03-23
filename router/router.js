var MainController = require('../controllers/MainController');
module.exports = function(app){

  //route Ajax
    app.get('/controller/getSession', MainController.GetSession);
    app.get('/controller/getPlayers', MainController.GetPlayers);
    app.get('/controller/getMessages', MainController.GetMessages);
    app.get('/controller/getPropose', MainController.GetPropose);
    app.get('/controller/getGames', MainController.GetGames);
    app.post('/controller/postConnection', MainController.Connexion);
    app.post('/controller/proposerUnGame', MainController.ProposerUnGame);
    app.post('/controller/acceptGame', MainController.AcceptGame);
    app.post('/controller/setPlay', MainController.SetPlay);
    app.post('/controller/supprimerUnGame', MainController.SupprimerUnGame);
    app.post('/controller/envoiDeMessage', MainController.EnvoiDeMessage);
    app.post('/controller/appliquerDeplacement',MainController.AppliquerDeplacement);
    app.post('/controller/passerTour',MainController.PasserTour);

    app.post('*', MainController.Index);
    app.get('*', MainController.Index);
    app.get('/', MainController.Index);
};
