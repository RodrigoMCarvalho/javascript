var http = require('http'),
	port = 3000;

var server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.statusCode = 200;

	switch(req.method) {
		case 'GET': handleGet(req, res); break;
		case 'POST': handlePost(req, res); break;
	}
})

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

function handleGet(req, res) {
	MongoClient.connect(url, (err, database) => {
		const conexao = database.db('treinaweb');
		conexao.collection('frutas').find().sort({nome: 1}).toArray((err, result) => {
			res.write(JSON.stringify(result));
			res.end();
		})
	})
} 

function handlePost(req, res) {
	var body = [];
	req.on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
		var obj = JSON.parse(body);

		MongoClient.connect(url, (err, database) => {
		const conexao = database.db('treinaweb');
			conexao.collection('frutas').insertOne(obj, () => {
				handleGet(req, res);
			})
		})
	})
}

console.log(`Ouvindo a porta ${port}`);
server.listen(port);



