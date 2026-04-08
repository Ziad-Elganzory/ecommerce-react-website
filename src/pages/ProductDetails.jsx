import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();



  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  },[id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const itemInCart = cartItems.find((item) => item.id === product.id);
  const itemLabel = itemInCart ? `(${itemInCart.quantity})` : "";


  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price.toFixed(2)}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn btn-primary" onClick={()=> addToCart(product.id)}>Add to Cart {itemLabel}</button>
          </div>
        </div>
      </div>
    </div>
  )
}