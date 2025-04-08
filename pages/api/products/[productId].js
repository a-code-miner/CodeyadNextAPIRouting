export default function handler(req, res) {
    const { productId } = req.query;
    const products = [
        { id: 1, title: 'Product-1', price: 999_988_000_000_000 },
        { id: 2, title: 'Product-2', price: 988_988_000_000_000 },
        { id: 3, title: 'Product-3', price: 977_988_000_000_000 },
        { id: 4, title: 'Product-4', price: 966_988_000_000_000 },
        { id: 5, title: 'Product-5', price: 955_988_000_000_000 },
    ]
    res.status(201).json(products.find(product => product.id == productId));
};
