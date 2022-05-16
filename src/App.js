import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddNew from './components/AddNew/AddNew';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';


function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/addNew" element={
          <RequireAuth>
           <AddNew />
          </RequireAuth>
        }></Route>
        <Route path="/mngInventory" element={
          <RequireAuth>
           <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
