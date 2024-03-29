import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashBoard from './pages/admin/dashboard';
import Home from './pages/user/Home';


function App() {
  return (
    <div className=' flex  bg-dark-blue'>
      <Router>
        <Routes>
          <Route path='/admin' element={<DashBoard />} />
          <Route path='/'  element= {<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
