import express, {Request, Response} from 'express'
import path from 'path'
const PORT = 3000

interface Category{
    id: number,
    name: string
}

interface Product{
    id: number,
    name: string
    category: string
}

let categories: Category[] = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' }
]

let products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
]

function init() {
    const app = express()
    app.use(express.json())

    // GET all categories
    app.get('/categories', (req: Request, res: Response) => {
        res.json(categories)
    })

    // GET category by ID
    app.get('/categories/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const category = categories.find(cat => cat.id === id)
        if (category) {
            res.json(category)
        } else {
            res.status(404).json({message: "Category not found"})
        }
    })

    // POST new category
    app.post('/categories', (req: Request, res: Response) => {
        const { name } = req.body
        if (typeof name === 'string') {
            const newCategory: Category = {
                id: categories.length ? categories[categories.length - 1].id + 1 : 1,
                name
            }
            categories.push(newCategory)
            res.status(201).json(newCategory)
        } else {
            res.status(400).json({ message: 'Invalid data' })
        }
    })
    

    // PUT update category by ID
    app.put('/categories/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const { name } = req.body
        const categoryIndex = categories.findIndex( cat => cat.id === id)
        if (categoryIndex !== -1 && typeof name === 'string') {
            categories[categoryIndex].name = name
            res.json(categories[categoryIndex])
        } else {
            res.status(400).json({message: "Invalid data or Category not found"})
        }
    })


    // DELETE category by ID
    app.delete('/categories/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        categories = categories.filter(cat => cat.id !== id)
        res.status(204).end()
    })


    // GET products by name query
    app.get('/products', (req: Request, res: Response) => {
        const name = req.query.name as string
        if (name) {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
            res.json(filteredProducts)
        } else {
            res.json(products)
        }
    })

    // GET products by category and name query
    app.get('/products/category/:categoryName', (req: Request, res: Response) => {
        const categoryName = req.params.categoryName
        const name = req.query.name as string
        let filteredProducts = products.filter(product => product.category === categoryName)
        if (name) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
        }
        res.json(filteredProducts)
    })

    // // GET products by category and name query
    // app.get('/products/category/:categoryName', (req: Request, res: Response) => {
    //     const categoryName = req.params.categoryName
    //     const name = req.query.name as string
    //     let filteredProducts = products.filter(product => product.category === categoryName);
    //     if (name) {
    //         filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    //     }
    //     res.json(filteredProducts)
    // });

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })

}

init()