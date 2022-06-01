import Footer from './components/common/footer.js';
import Header from './components/common/header';
import Nav from './components/common/nav';
import About from './components/pages/about';
import Home from './components/pages/home';
import Newsletter from './components/pages/newsletter';
import ProductList from './components/products/productList';
import Product from './components/products/product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import lamps from './data/lamps.json';
import candles from './data/candles.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<Newsletter />} />

              <Route path="/lamps">
                <Route
                  index
                  element={<ProductList products={lamps} type={'Lamps'} />}
                />
                <Route path=":id" element={<Product products={lamps} />} />
              </Route>

              <Route path="/candles">
                <Route index element={<Product products={candles} />} />

                <Route
                  path=":id"
                  element={<ProductList products={candles} type={'Candles'} />}
                />
              </Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
