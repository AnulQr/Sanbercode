// const express = require('express')
// const app = express()
// const port = 300

// app.get('/', (req, res) =>{
//     res.send(`Hello, ExpressJS!`)
// })

// app.listen(port, () => {
//     console.log(`Server is running at <http://localhost:${port}>`)
// })


// - Simulasi Operasi Input / Output

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Simulasi operasi I/O dengan setTimeout
//   setTimeout(() => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!\\\\n');
//   }, 1000);
// });

// server.listen(3000, () => {
//   console.log(`Server running at <http://localhost:3000/>`);
// });

// Import modul HTTP bawaan Node.js
const http = require('http');

// Buat server HTTP
const server = http.createServer((req, res) => {
    // Set header respons HTTP
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // Kirim pesan "Hello World"
    res.end(`Hello World\\n`)
})

// Tentukan port di mana server akan mendengarkan
const port = 3000

// Jalankan server
server.listen(port, () => {
    console.log(`Server running at <http://localhost:${port}/>`)
})

