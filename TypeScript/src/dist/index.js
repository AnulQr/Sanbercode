"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const great = (name) => {
    return `Hello ${name}`;
};
console.log(great(`Hello World`));
//Studi Kasus 1: Konversi Fungsi Sederhana
const num = (a, b) => {
    return a + b;
};
console.log(num(5, 8));
const user = {
    name: "John",
    age: 30
};
const userInfo = (user) => {
    return `Name: ${user.name}\nAge: ${user.age}`;
};
console.log(userInfo(user));
// Studi Kasus 3: Menggunakan Async/Await
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const respone = yield fetch(url);
    const data = yield respone.json();
    return data;
});
fetchData("<https://api.example.com/data>")
    .then(data => console.log(data))
    .catch(error => console.error(error));
