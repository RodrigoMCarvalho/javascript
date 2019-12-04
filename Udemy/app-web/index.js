const restify = require('restify');
const errs = require('restify-errors');
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

server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

server.get('/', restify.plugins.serveStatic({  //plugin do Restify que define o diretório padrão
    directory: './dist',
    file:  'index.html'
}));


  ////////////  ROTAS CRUD
server.get('/read', function (req, res, next) {
    knex('tb_rest').then((dados)=> {   // rest é a tabela criada no BD
        res.send(dados);
    }, next)
    return next();
});

server.post('/create', function (req, res, next) {
    knex('tb_rest').insert(req.body)
                .then((dados)=> {  
        res.send(dados);
    }, next)
    return next();
});

server.get('/show/:id', function (req, res, next) {
    const { id } = req.params;
    knex('tb_rest').where('id', id)
                .first()
                .then((dados)=> { 
                    if(!dados) 
                        return res.send(new errs.BadRequestError('Não foi encontrado usuário para o ID: ' + id));  
        res.send(dados);
    }, next)
});

server.put('/update/:id', function (req, res, next) {
    const { id } = req.params;
    knex('tb_rest').where('id', id)
                .update(req.body)
                .then((dados)=> { 
                    if(!dados) 
                        return res.send(new errs.BadRequestError('Não foi encontrado usuário para o ID: ' + id));  
        res.send('Dados atualizados com sucesso!');
    }, next)
});

server.del('/delete/:id', function (req, res, next) {
    const { id } = req.params;
    knex('tb_rest').where('id', id)
                .delete()
                .then((dados)=> { 
                    if(!dados) 
                        return res.send(new errs.BadRequestError('Não foi encontrado usuário para o ID: ' + id));  
        res.send('Dados excluídos com sucesso!');
    }, next)
});