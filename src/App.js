import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="settings" element={ <Settings/> } />
      </Routes>

    </div>
  );
}

export default App;
