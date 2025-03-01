import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Editpage from './pages/editpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={<Editpage />} />
      </Routes>
    </div>
  );
}

export default App;
