// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.

// 1. Variabel
//var - variabel yang dideklarasikan dengan var dapat diubah dan bersifat global atau function-scoped.
var varGlobal = "variabel global dengan var";
console.log(varGlobal)

//let - variabel yang dideklarasikan dengan let hanya dapat diakses di blok tempat dideklarasikan (block-scoped).
let letBlock = "variabel dangan let"
console.log(letBlock)

// const - variabel yang dideklarasikan dengan const tidak dapat diubah (read-only) dan juga block-scoped.
const constanValue = "variabel dengan const"
console.log(constanValue)

// 2. Tipe Data Primitif
//number
let integer = 10
let float = 3.1
console.log(`Type data number:
    integer: ${integer}
    float: ${float}`
)

// String
let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let templateString = `Hello, world!`;
console.log("String:");
console.log("Single Quote:", singleQuoteString);
console.log("Double Quote:", doubleQuoteString);
console.log("Template Literal:", templateString);

// Boolean
let isTrue = true;
let isFalse = false;
console.log("Boolean:");
console.log("True:", isTrue);
console.log("False:", isFalse);

// Undefined
let undefinedVar;
console.log("Undefined:");
console.log("Undefined Variable:", undefinedVar);

// Null
let nullVar = null;
console.log("Null:");
console.log("Null Variable:", nullVar);

// 3. Tipe Data Non-Primitif
// Object
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};
console.log("Object:");
console.log(person);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array:");
console.log(numbers);

// Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("Function:");
console.log(greet("Bob"));

// 4. Operator Aritmatika
let a = 10;
let b = 5;
console.log("Operator Aritmatika:");
console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", a / b);
console.log("Sisa Bagi:", a % b);
console.log("Pangkat:", a ** b); // Eksponensiasi

// 5. Operator Perbandingan
console.log("Operator Perbandingan:");
console.log("Sama dengan:", a == b);
console.log("Tidak sama dengan:", a != b);
console.log("Lebih besar dari:", a > b);
console.log("Lebih kecil dari:", a < b);
console.log("Lebih besar sama dengan:", a >= b);
console.log("Lebih kecil sama dengan:", a <= b);

// Perbandingan tipe data (===) dan (!==)
console.log("Perbandingan Tipe Data:");
console.log("Sama dengan (===):", a === 10);
console.log("Tidak sama dengan (!==):", a !== 5);