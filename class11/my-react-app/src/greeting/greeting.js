function Greeting() {
 return <h1>Hello, React!</h1>;
}

export function PizzaCard() {
 return (
 <div className="pizza-card">
 <h3>Margherita Pizza</h3>
 <p>Fresh mozzarella, tomato, basil</p>
 <p>$12.99</p>
 <button>Order Now</button>
 </div>
 );
}

export default Greeting;