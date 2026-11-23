const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'online',
    projeto: 'Projeto DevOps PUCRS - Fase 2',
    ambiente: process.env.NODE_ENV || 'production'
  }));
});

server.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
