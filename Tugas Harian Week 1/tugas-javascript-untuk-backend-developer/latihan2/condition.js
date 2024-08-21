// Import readline-sync untuk mendapatkan input dari pengguna
const readline = require('readline-sync');

// 1. Menentukan apakah angka genap atau ganjil
function checkEvenOrOdd() {
    // Meminta input dari pengguna
    let number = readline.questionInt("Masukkan sebuah angka: ");

    // Menggunakan struktur if-else untuk menentukan genap atau ganjil
    if (number % 2 === 0) {
        console.log(`${number} adalah angka genap.`);
    } else {
        console.log(`${number} adalah angka ganjil.`);
    }
}

// 2. Mencetak nama hari berdasarkan nomor hari
function printDayOfWeek() {
    // Meminta input dari pengguna
    let dayNumber = readline.questionInt("Masukkan nomor hari (1-7): ");

    // Menggunakan switch untuk mencetak nama hari
    switch (dayNumber) {
        case 1:
            console.log("Senin");
            break;
        case 2:
            console.log("Selasa");
            break;
        case 3:
            console.log("Rabu");
            break;
        case 4:
            console.log("Kamis");
            break;
        case 5:
            console.log("Jumat");
            break;
        case 6:
            console.log("Sabtu");
            break;
        case 7:
            console.log("Minggu");
            break;
        default:
            console.log("Nomor hari tidak valid. Harap masukkan nomor antara 1 hingga 7.");
            break;
    }
}

// Menjalankan fungsi
checkEvenOrOdd();
printDayOfWeek();
