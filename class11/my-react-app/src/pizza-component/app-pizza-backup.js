import './App.css';
//import Greeting ,{ PizzaCard }from './greeting/greeting';
import PizzaOrderApp,{SimpleOrderForm,PizzaShop} from './pizza-component/pizza-app';
import Menu from './pizza-component/styled-pizza';
import SimpleTodoApp from './todo-app/todo';

function App() {
  return (
    <div className="App">
      <PizzaOrderApp />
      <PizzaShop />
      <SimpleOrderForm />
      <Menu />
      <SimpleTodoApp />
    </div>
  );
}

export default App;
