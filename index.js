const express = require("express");
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mapa para definir los caracteres gráficos de cada letra del abecedario
//la clave es la letra del abecedario y el valor es la representación gráfica
//cada posición del array representa cada línea de cada letra
let abecedario= new Map();
abecedario.set("a",['****','*  *','****','*  *','*  *']);
abecedario.set("b",['****','*  *','****','*  *','****']);
abecedario.set("c",['****','*   ','*   ','*   ','****']);
abecedario.set("d",['*** ','*  *','*  *','*  *','*** ']);
abecedario.set("e",['****','*   ','****','*   ','****']);
abecedario.set("f",['****','*   ','*** ','*   ','*   ']);
abecedario.set("g",['****','*   ','****','*  *','****']);
abecedario.set("h",['*  *','*  *','****','*  *','*  *']);
abecedario.set("i",['****',' *  ',' *  ',' *  ','****']);
abecedario.set("j",['****','  * ','  * ','* * ','*** ']);
abecedario.set("k",['*  *','* * ','*   ','* * ','*  *']);
abecedario.set("l",['*   ','*   ','*   ','*   ','****']);
abecedario.set("m",['*  *','****','*  *','*  *','*  *']);
abecedario.set("n",['*  *','** *','* **','*  *','*  *']);
abecedario.set("ñ",['****','** *','* **','*  *','*  *']);
abecedario.set("o",['****','*  *','*  *','*  *','****']);
abecedario.set("p",['****','*  *','****','    ','*   ']);
abecedario.set("q",['****','*  *','** *','****','   *']);
abecedario.set("r",['****','*  *','**  ','* * ','*  *']);
abecedario.set("s",['****','*   ','****','   *','****']);
abecedario.set("t",['****',' *  ',' *  ',' *  ',' *  ']);
abecedario.set("u",['*  *','*  *','*  *','*  *','****']);
abecedario.set("v",['*  *','*  *','*  *','*  *',' ** ']);
abecedario.set("w",['*  *','*  *','*  *','****','*  *']);
abecedario.set("x",['*  *','*  *',' ** ','*  *','*  *']);
abecedario.set("y",['*  *','*  *','****','   *',' ***']);
abecedario.set("z",['****','  * ',' *  ','*   ','****']);
abecedario.set("espacio",['    ','    ','    ','    ','    ']);

//inicializa variables
let mensaje = ''
let texto = ''

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

//método para concatenar todo el texto gráfico en la variable cadenaFinal y retornarla
function devolverEnAsteriscos(texto) {
    //convierte texto a minúscula
    texto = texto.toLowerCase() ;
    //console.log('texto',texto);
    palabras = texto.split([' ']);
    //console.log('lista palabras',palabras);
    cadenaFinal = ''
    //ciclo para recorrer las filas
    for (var j = 0;j < 5 ;j++) {
        //ciclo para recorrer cada palabra
        palabras.forEach(item => {
            //ciclo para recorrer cada letra
            for (var i = 0; i < item.length ; i++) {
                //obtiene la línea
                letra = item.charAt(i);
                //obtiene la línea i de la letra
                cadenaFinal+=abecedario.get(letra)[j];
                //después de cada letra agrega un espacio para que se distinga cada letra
                cadenaFinal+=' ';
            }
            //al final de cada palabra agrega un espacio del abecedario
            cadenaFinal+=abecedario.get('espacio')[j];
        });
        //al final de cada línea agrega un salto de línea
        cadenaFinal+="\n";
    }
   
    console.log(cadenaFinal);
    //retorna el gráfico completo
    return cadenaFinal;
  }

//endpoint para mostrar mensaje en la api
app.get('/', function(req, res) {
    respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'mensaje'
    };
    res.send(respuesta);
});

//endpoint para recibir palabra en la API
//no usar este endpoint ya que un GET no debe recibir parámetros
app.get('/mensaje', function (req, res) {
 respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };
 if(mensaje === '') {
    respuesta = {
    error: true,
    codigo: 501,
    mensaje: 'No hay ninguna palabra'
    };
 } else {
    //mostrar palabra
    respuesta = {
        error: true,
        codigo: 501,
        mensaje: devolverEnAsteriscos(mensaje)
        };
 }
 res.send(respuesta);
});


//endpoint que usé para recibir un texto y devolverlo gráficamente con el caracter (*)
app.post('/mensaje', function (req, res) {
    //valida que se reciba el texto en el body
    if(!req.body.texto) {
     respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El texto es requerido'
     };
    } else {

      texto = req.body.texto;
      
      respuesta = {
       error: false,
       codigo: 200,
       mensaje: devolverEnAsteriscos(texto),
       respuesta: mensaje
      };
     
    }
    //envía respuesta de la API
    res.send(respuesta);
   });


//ejecuta el servidor local en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });