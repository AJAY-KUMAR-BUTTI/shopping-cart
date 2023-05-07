import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import DashBoard from './components/DashBoard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<DashBoard />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
