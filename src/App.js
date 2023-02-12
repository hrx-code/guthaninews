import './App.css';
import Homepage from './Components/Homepage';
import { Home } from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import Nav from './Components/Nav';
import NewsWithID from './Components/NewsWithID';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/News" element={<News></News>}></Route>
          <Route path="/News/:id" element={<NewsWithID></NewsWithID>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
