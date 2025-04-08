export default function handler(req, res) {
    const { params } = req.query;
    console.log(params);
    res.status(201).json({ id: 1, title: 'Product-1', price: 9877 });
};
