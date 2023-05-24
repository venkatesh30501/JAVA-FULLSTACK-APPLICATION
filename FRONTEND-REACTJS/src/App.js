import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Create from './StudentResults/Create';
import Display from './StudentResults/Display';
import Update from './StudentResults/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Display />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update/:var1' element={<Update />} />
    </Routes>
  );
}

export default App;
