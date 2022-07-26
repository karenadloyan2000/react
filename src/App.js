import './App.css';
import './costom.css';
import './media.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />;
      </Routes>
    </div>
  );
}

export default App;
