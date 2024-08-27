import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import OnePage from './Pages/OnePage';
import TwoPage from './Pages/TwoPage';
import ThreePage from './Pages/ThreePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/one' element={<OnePage/>} />
        <Route path='/two' element={<TwoPage/>} />
        <Route path='/three' element={<ThreePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
