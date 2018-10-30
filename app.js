
//###### Подключаемые модули ######
var express = require('express') // Модуль поднятия сервера
var bodyParser = require("body-parser"); // Модуль для обработки пост запроссов
//#################################

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

//Подключаем Html форму при помощи метода res.sendfile('index.html')
app.get('/', function (req, res) {
    res.sendfile('index.html');
});


app.listen('16515', function () { console.log("server rabotaet") }) //этой командай запускаем node js сервер (3000 порт доступа)

app.post('/page_test', function (req, res) {
    res.send('Ответ от сервера на нажатие кнопки');
    console.log(req.body);
})