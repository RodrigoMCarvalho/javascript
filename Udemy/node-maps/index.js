const restify = require('restify');
const googleMapsClient = require('@google/maps').createClient({
    key: '',
    Promise: Promise
})
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'db_app-web'
    }
  });

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

server.get("/all", function(req, res, next) {
    knex('tb_places').then((dados)=> {   // tb_places é a tabela criada no BD
        res.send(dados);
    }, next)
    return next();
})

server.get("/geocode", function(res,res,next) {
    googleMapsClient.geocode({address: '1600 Amplitheatre Parway, Mountain View, CA'}).asPromise()
        .then((response) => {
            res.send(response.json.results);
        })
        .catch((err) => {
            res.send(err);
        })
})