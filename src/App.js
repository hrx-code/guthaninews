import './App.css';
import Homepage from './Components/Homepage';
import { Home } from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import Nav from './Components/Nav';
import NewsWithID from './Components/NewsWithID';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
// HashRouter as Router

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/https://hrx-code.github.io/guthaninews/" element={<Homepage></Homepage>}></Route>
          <Route path="/https://hrx-code.github.io/guthaninews/About" element={<About></About>}></Route>
          <Route path="/https://hrx-code.github.io/guthaninews/News" element={<News></News>}></Route>
          <Route path="/https://hrx-code.github.io/guthaninews/News/:id" element={<NewsWithID></NewsWithID>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
