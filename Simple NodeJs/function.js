const product = [
    {id: 1, name: "leptop", price: 1000},
    {id: 2, name: "Phone", price: 500},
    {id: 3, name: "Tabet", price: 700}
]

const discountedProducts = product.map(product => ({
    ...product, 
    price: product.price * 0.9
}))

console.log(discountedProducts)