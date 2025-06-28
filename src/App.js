import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Carousel from './Carousel';
import TopProperties from './TopProperties';

function App() {
  return (
    <div className="App">
        <Header/> 
        <Carousel/>
        <TopProperties/>
    </div>
  );
}

export default App;
