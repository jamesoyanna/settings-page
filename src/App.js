import './App.css';
import Billing from './components/billing/Billing';
import Header from './components/header/Header';
import Sidebar from './components/Navbar/Sidebar';
import Settings from './components/settings/Settings';
function App() {
  return (
    <div className="app h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden px-6">
       <Header />
      <div className="flex items-start space-x-2 justify-start w-full ">
        <Sidebar />
        <div className=" w-full h-[90vh] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3">
      <div className=" items-center justify-center flex flex-col col-span-12 h-full   py-2 px-3 w-full space-y-4">
        <div className="pt-6 px-3 w-[410px] h-full space-y-8 xl:w-full">
        <Settings />
       <Billing />
        </div>
       
      </div>
    </div>
      </div>

    </div>
  );
}

export default App;
