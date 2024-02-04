
const http = require('http');

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Javier'
    // }


    res.write('Hola mundo');
    // res.write('1, Javier\n');
    // res.write('2, Maria\n');
    // res.write('3, Juan\n');
    res.end();
})
.listen( 8080 );

console.log('Escuchando eel puerto', 8080);
