// Import module http nodejs
const http = require('http')

// Membuat Server http
const server = http.createServer((req, res) => {
    // Set header http
    res.writeHead(200, { 'Const-Type' : 'text/plant'})
    //Kirim pesan Hello, World!
    res.end(`Hello, World!`)
})

// Port server yang digunakan
const port = 300

// Menjalankan server
server.listen(port, () => {
    console.log(`Server berjalan di <http://localhost>:${port}/>`)
})

