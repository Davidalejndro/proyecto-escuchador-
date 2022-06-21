const express = require('express');
const bodyparser = require('body-parser');
jsonParser = bodyparser.json();
const cors = require('cors');
const app = express();

    let respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    }

    let items = [
        {
            name:"Audifonos Apple Airpods Max",
            description: "Audinos de estudio",
            platform : "Apple",
            img : "./assets/images/earpods.jpeg"
        },
        {
            name:"Smartphone Apple Iphone 12 Pro",
            description: "Celular de alta gama",
            platform : "Apple",
            img : "./assets/images/iphone12pro.jpeg"
        },
        {
            name:"Smartphone Apple Iphone 12",
            description: "Celular de gama media ",
            platform : "Apple",
            img : "./assets/images/iphone12.jpeg"
        },
        {
            name:"Smartphone Samsung S22",
            description: "Celular de alta gama",
            platform : "Samsung",
            img : "./assets/images/samsungs22.jpeg"
        },
        {
            name:"Tv Lg + Soundbard",
            description: "Televisión pantalla LCD",
            platform : "Lg",
            img : "./assets/images/tv.jpeg"
        },
        {
            name:"Mac Mini",
            description: "Mac Mini m1-8 GPU8/ 8GB",
            platform : "Apple",
            img : "./assets/images/macpc.jpeg"
        }
    ];

app.use(cors({
    origin:'*'
}))

app.get('/', function(req, res){
    res.send('API de accesorios corriendo');
});

app.get('/products', function(req,res){

    respuesta = {
        error : false,
        codigo : 200,
        mensaje : items
    };
    res.send(respuesta);
});

app.get('/product/:id', jsonParser, function(req, res){
    let id = req.params.id;
    console.log("ID :: ",id);
    respuesta = {
        error : false,
        codigo : 200,
        mensaje : items[id]
    };
    res.send(respuesta);
});

app.post('/product', jsonParser, function(req,res){
    console.log(req.body);
        if(!req.body){
            respuesta = {
                error: true,
                codigo: 500,
                mensaje: 'Error creando  articulo nuevo'
            }
        }else{
            items.push(req.body)
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: items
            }
        }
        res.send(respuesta)
});

app.put('/product/:id', jsonParser, function(req, res){
    let id = req.params.id;
    items[id].name = req.body.name;
    items[id].description = req.body.description;
    items[id].platform =  req.body.platform;
    items[id].img = req.body.img;
    console.log(items[id]);
    respuesta = {
        error : false,
        codigo: 200,
        mensaje: items[id]
    };
    res.send(respuesta);
})

app.listen(3000, ()=>{
    console.log('Aplicación de Accesorios Electronicos');
});