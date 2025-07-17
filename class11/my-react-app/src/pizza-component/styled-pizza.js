export function StyledPizzaCard({ name, price, isPopular }) {
 // Style objects
 const cardStyle = {
 border: '2px solid #ddd',
 borderRadius: '8px',
 padding: '15px',
 margin: '10px',
 backgroundColor: isPopular ? '#ffe3e3' : 'white'
 };

 const priceStyle = {
 fontSize: '24px',
 color: '#ff6b6b',
 fontWeight: 'bold'
 };

 const badgeStyle = {
 backgroundColor: '#ff6b6b',
 color: 'white',
 padding: '5px 10px',
 borderRadius: '20px',
 fontSize: '12px'
 };

 return (
 <div style={cardStyle}>
 {isPopular && <span style={badgeStyle}>POPULAR!</span>}
 <h3>{name}</h3>
 <p style={priceStyle}>${price}</p>
 <button>Order Now</button>
 </div>
 );
}

export function Menu() {
 return (
 <div>
 <StyledPizzaCard name="Margherita" price={12} isPopular={true} />
 <StyledPizzaCard name="Hawaiian" price={13} isPopular={false} />
 </div>
 );
}

export default Menu;