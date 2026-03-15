import { useState, useEffect } from "react";
import { products as initialProduct } from "../data/products";

export default function useProduct() {
    const [products, setProducts] = useState(() => {
        const save = window.localStorage.getItem("products");
        return save ? JSON.parse(save) : initialProduct;
    });
    useEffect(() => {
        window.localStorage.setItem("products", JSON.stringify(products));
    }, [products]);
    return [products, setProducts];
}
