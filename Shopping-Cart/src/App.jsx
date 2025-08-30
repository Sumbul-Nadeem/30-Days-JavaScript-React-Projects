import React, { useState } from "react";
import "./App.css";
import Image1 from "./assets/Img1.jpg";
import Image2 from "./assets/Img2.jpg";
import Image3 from "./assets/Img3.jpg";
import Image4 from "./assets/Img4.jpg";
import Image5 from "./assets/Img5.jpg";
import Image6 from "./assets/Img6.jpg";

const products = [
  { id: 1, name: "Sneakers", price: 1200, img: Image1 },
  { id: 2, name: "Headphones", price: 1500, img: Image2 },
  { id: 3, name: "Backpack", price: 1000, img: Image3 },
  { id: 4, name: "Smartwatch", price: 1800, img: Image4 },
  { id: 5, name: "Mobile", price: 8000, img: Image5 },
  { id: 6, name: "Jeans", price: 600, img: Image6 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="app">
      {/* Products Section */}
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h2>{p.name}</h2>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>
                <div className="item-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
            ))}
            <h3 className="total">Total: ₹{total}</h3>
            <button className="checkout-btn">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
