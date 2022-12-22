import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
