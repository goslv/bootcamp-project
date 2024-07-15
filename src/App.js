import './App.css';
import login from './components/login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
        <Router>
          <Routes>
            <Route path="/login" element={<login/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
