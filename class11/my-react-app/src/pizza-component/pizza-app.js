import React, { useState } from "react";

export function PizzaOrderApp() {
  const [selectedPizza, setSelectedPizza] = useState("");
  const [size, setSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);
  const pizzaPrices = {
    margherita: 12,
    pepperoni: 14,
    hawaiian: 13,
  };
  const sizePrices = {
    small: 0.8,
    medium: 1,
    large: 1.3,
  };
  const calculateTotal = () => {
    if (!selectedPizza) return 0;
    return (pizzaPrices[selectedPizza] * sizePrices[size] * quantity).toFixed(
      2
    );
  };
  return (
    <div className="pizza-app">
      <h1>Pizza Order</h1>
      <div>
        <h3>Choose Pizza:</h3>
        <button
          onClick={() => setSelectedPizza("margherita")}
          className={selectedPizza === "margherita" ? "selected" : ""}
        >
          Margherita
        </button>
        <button
          onClick={() => setSelectedPizza("pepperoni")}
          className={selectedPizza === "pepperoni" ? "selected" : ""}
        >
          Pepperoni
        </button>
        <button
          onClick={() => setSelectedPizza("hawaiian")}
          className={selectedPizza === "hawaiian" ? "selected" : ""}
        >
          Hawaiian
        </button>
      </div>
      <div>
        <h3>Size:</h3>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <h3>Quantity:</h3>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>
        <span> {quantity} </span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <div className="total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
}

export function SimpleOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    console.log("Order for:", name);
    console.log("Phone:", phone);
    console.log("Deliver to:", address);
    alert("Order placed! We'll call you soon.");
    // Clear form
    setName("");
    setPhone("");
    setAddress("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Details</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows="3"
      />
      <button type="submit">Place Order</button>
    </form>
  );
}

export function PizzaCard({ name, price, onOrder }) {
  return (
    <div className="pizza-card">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => onOrder(name, price)}>Order This</button>
    </div>
  );
}
// Combine into bigger component
export function PizzaShop() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const handleOrder = (name, price) => {
    setCart([...cart, { name, price }]);
    setTotal(total + price);
  };
  return (
    <div>
      <h1>Pizza Shop</h1>
      <div className="menu">
        <PizzaCard name="Margherita" price={12} onOrder={handleOrder} />
        <PizzaCard name="Pepperoni" price={14} onOrder={handleOrder} />
        <PizzaCard name="Hawaiian" price={13} onOrder={handleOrder} />
      </div>
      <div className="cart">
        <h2>Your Order</h2>
        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.price}
          </p>
        ))}
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

export default PizzaOrderApp;



