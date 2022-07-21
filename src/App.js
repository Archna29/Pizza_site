
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Pizzas from './Components/Pizzas';
import Order from './Components/Order'
import ImageSlider from './Components/ImageSlider';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
<Navbar/>
<Cards/>
<Pizzas/>
<Order/>
<ImageSlider/>
<Footer/>
    </div>
  );
}

export default App;
