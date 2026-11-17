import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
function App() {
    return(
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Movies' exact element={<Movies />} />
        </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;
