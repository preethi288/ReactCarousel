import './App.css';
import Carousel from './Components/Carousel/Carousel';
import SliderData from './Services/SliderData';

function App() {
  return (
    <div className="App">
      <Carousel SliderData={SliderData}/>
    </div>
  );
}

export default App;
