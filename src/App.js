import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/base/App.css';

import Home from './components/pages/Home';
import Reservations from './components/pages/Reservations';
import ScrollToTop from './components/layouts/ScrollToTop';

import Footer from './components/layouts/Footer';

function App() {

  return (

    <div>

      <Router>

        <ScrollToTop />

        <Routes>

          <Route path='/' element={<Home/>} />

          <Route path='/reservas' element={<Reservations/>} />

        </Routes>

        <Footer/>

      </Router>

    </div>

  );

}

export default App;
