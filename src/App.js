import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import RequireAuth from './components/RequireAuth';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route path='/dashboard/products' element={<Products/>}></Route>
          <Route path='/dashboard/addproducts' element={<AddProducts/>}></Route>
          <Route path='/dashboard/users' element={<Users/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
