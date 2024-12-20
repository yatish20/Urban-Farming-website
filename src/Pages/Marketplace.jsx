import React, { useState } from 'react';
import './Marketplace.css'; // Import the CSS

// Featured Products Data
const products = [
    { name: "Fresh Apples", price: "$2.99", image: "apple.jpg" },
    { name: "Organic Tomatoes", price: "$3.49", image: "tomato.jpg" },
    { name: "Oranges", price: "$4.99", image: "orange.jpg" },
];

// FeaturedProducts Component
const Marketplace = () => {
    const [cart, setCart] = useState([]);

    // Function to add product to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);  // Corrected template literal
    };

    return (
        <div className="products-grid">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-details">
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Cart Component (Optional: to display the current cart items)
const Cart = ({ cart }) => (
    <div className="cart-container">
        <h2 className="cart-title">Cart Items</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
        )}
    </div>
);

export default Marketplace;
