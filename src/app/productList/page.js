'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data?.products);
        }
        fetchData();
    }, [])
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-5">All products Number: {products?.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    products.map((product) => (
                        <div className="border-2 border-red-600 p-5" key={product.id}>
                            <Image src={product.thumbnail} alt="phone" className="fill" width={400} height={400}></Image>
                            <h2>Title: {product.tittle}</h2>
                            <p>Price: {product.price}</p>
                            <p>Stock: {product.stock}</p>
                            <p>Description: {product.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;