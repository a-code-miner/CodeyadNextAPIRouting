import { useState } from "react";

export default function Home() {
	const [data, setData] = useState([]);
	const handleGetData = async () => {
		const res = await fetch('/api/products');
		console.log(res);
		const products = await res.json();
		setData(products);
	};

	return (
		<>
			<button onClick={handleGetData}>Get Data</button>
			<ul>
				{data.map(product => (
					<li key={product.id}>Product: {product.title} - Price: {product.price}</li>
				))}
			</ul>
		</>
	);
};
