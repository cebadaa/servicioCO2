const http = require('node:http');

const hostname = '0.0.0.0';
const port = 8092;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let arreglo =[
    {
    nombre: "Juan",
    apellido: "Perez"
    },
    {
        nombre: "Mario",
        apellido: "Bros"
    }
  ]

  res.write(JSON.stringify(arreglo))
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 