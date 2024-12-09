// import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './compontes/Header';
import Sidebar from'./compontes/Header/Sidebar';

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <div className='main d-flex'>
    <div className='Sidebar'>
      <Sidebar/>
    </div>
    <div className='content'>
    <Routes>
    <Route path = '/' exact={true} element={<Dashboard/>}/>
    <Route path = '/ dashboard' exact={true} element={<Dashboard/>}/>
   </Routes>
      
    </div>

   </div>
   
   </BrowserRouter>
  );
}

export default App;
