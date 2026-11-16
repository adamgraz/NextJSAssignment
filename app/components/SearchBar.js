"use client";
import { useState, useEffect } from "react";

export default function SearchBar() {
    const [name, setName] = useState("");
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const visible = products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search..." value={name} onChange={(e) => setName(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {visible.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt={product.title} width="50" /></td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}




