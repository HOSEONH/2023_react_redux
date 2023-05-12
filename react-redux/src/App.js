import logo from './logo.svg';
import './App.css';
import CounterBox from './components/CounterBox';
import ExConterBox from './components/ExConterBox';
import CounterNumber from './components/CounterNumber';
import MemoComp from './components/MemoComp';
import CounterThunk from './components/CounterThunk';
import WeatherThunk from './components/WeatherThunk';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExConterBox />
      <CounterNumber />
      <MemoComp />
      <CounterThunk />
      <WeatherThunk />
    </div>
  );
}

export default App;
