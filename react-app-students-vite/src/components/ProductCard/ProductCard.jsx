import { useParams } from "react-router-dom"
import productsData from './../../data/products.json'


const ProductCard = () => {
    const {product_id} = useParams()

    const foundProductTop = productsData.find((element)=>{
        return element.id == product_id;
    })

    return (
        <div className="ProductCard">
            <h2>Detalles del producto:</h2>
            <p>Articulo: {foundProductTop.title}</p>
            <p>Marca: {foundProductTop.brand}</p>
            <p>Precio: {foundProductTop.price}</p>
            <p>Puntiacion: {foundProductTop.rating}</p>
        </div>
    )
}

export default ProductCard