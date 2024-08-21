// math.js

// Fungsi untuk menghitung luas lingkaran berdasarkan jari-jari
const hitungLuasLingkaran = jariJari => Math.PI * jariJari ** 2;

// Fungsi untuk mengkuadratkan setiap angka dalam array
const kuadratkanArray = arr => arr.map(angka => angka ** 2);

// Contoh penggunaan
console.log(hitungLuasLingkaran(5)); // Output: 78.53981633974483
console.log(kuadratkanArray([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]
