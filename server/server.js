var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 4000;

app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
	console.log(`Example app listening on port http://localhost:${port}/`);
});

const url = "./users.json";
app.get('/', (req, res) => {

	fs.readFile(url, 'utf-8', (e, file) => {
		res
			.status(200)
			.send(file);
	})

})
app.post('/', (req, res) => {

	fs.readFile(url, 'utf-8', (e, file) => {

		const { email, password } = req.body;
		const data = JSON.parse(file);
		const auth = data.some(check => check.email == email && check.password == password)
		res
			.status(201)
			.send(auth)

	})

})
app.post('/user', (req, res) => {

	fs.readFile(url, 'utf-8', (e, file) => {

		const { name, secondName, age, profession, id } = req.body;

		const data = JSON.parse(file);
		const newData = data.filter(user => user.id == id)
		newData[0].name = name;
		newData[0].secondName = secondName;
		newData[0].age = age;
		newData[0].profession = profession;
		const newFile = JSON.stringify(newData)

		fs.writeFile(url, newFile, 'utf-8', (error) => {

			if (error) throw error; // если возникла ошибка
			console.log("Асинхронная запись файла завершена");
		});

		res
			.status(201)
			.send("Данные успешно именены")

	})

})