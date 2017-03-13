var express         = require('express'),
    session         = require('express-session'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'), //pour r�cup�rer les r�sultats des post
    http            = require('http'),
    path            = require('path');
	io 				= require('socket.io');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', 6800);
app.set('views', path.join(__dirname, 'views'));

// routes static, le routeur n'y aura pas acc�s
app.use(express.static(path.join(__dirname, '/public')));

app.use(cookieParser());

app.use(session({
    secret: 'nC0@#1pM/-0qA1+�',
    name: 'VipNode',
    resave: true,
    saveUninitialized: true
}));

/* ces lignes permettent d'utiliser directement les variables de session dans handlebars
 UTILISATION : {{session.MaVariable}}  */
app.use(function(request, response, next){
    response.locals.session = request.session;
    next();
});

var exphbs = require('express-handlebars');
app.set('view engine', 'handlebars'); //nom de l'extension des fichiers
var handlebars  = require('./helpers/handlebars.js')(exphbs); //emplacement des helpers
// helpers : extensions d'handlebars

app.engine('handlebars', handlebars.engine);


// chargement du routeur
require('./router/router')(app);


var serveur = http.createServer(app).listen(app.get('port'), function(){
    console.log('Serveur Node.js en attente sur le port ' + app.get('port'));
});

// Variables globales
// Ces variables resteront durant toute la vie du seveur et sont communes pour chaque client (node server.js)
// Liste des messages de la forme { pseudo : 'Mon pseudo', message : 'Mon message' }
var messages = [];
io = io.listen(serveur);

// Quand une personne se connecte au serveur
io.sockets.on('connection', function (socket) {
    // On donne la liste des messages (événement créé du côté client)
    socket.emit('recupererMessages', messages);
    // Quand on reçoit un nouveau message
    socket.on('nouveauMessage', function (mess) {
        // On l'ajoute au tableau (variable globale commune à tous les clients connectés au serveur)
        messages.push(mess);
        // On envoie à tout les clients connectés (sauf celui qui a appelé l'événement) le nouveau message
        socket.broadcast.emit('recupererNouveauMessage', mess);
    });
});
