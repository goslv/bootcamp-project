import './App.css';

import Login from './components/Login.jsx';
import Home from './pages/Home.jsx'

import Login from './components/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
