const great = (name : string): string => {
    return `Hello ${name}`
}

console.log(great(`Hello World`))


//Studi Kasus 1: Konversi Fungsi Sederhana

const num = (a: number, b: number): number =>{
    return a + b
}

console.log(num(5, 8))


//Studi Kasus 2: Menggunakan Objek
interface User {
    name : string;
    age : number;
}

const user: User = {
    name : "John",
    age : 30
}

const userInfo = (user: User): string => {
    return `Name: ${user.name}\nAge: ${user.age}`

}

console.log(userInfo(user))


// Studi Kasus 3: Menggunakan Async/Await
const fetchData = async (url:string): Promise<any> => {
    const respone = await fetch(url)
    const data = await respone.json()
    return data
}

fetchData("<https://api.example.com/data>")
.then(data => console.log(data))
.catch(error => console.error(error))
