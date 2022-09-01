import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StoreManagerLayout from './layouts/StoreManagerLayout';
import SupervisorLayout from './layouts/SupervisorLayout';
import Home from './pages/Home';
import Dashboard from './pages/supervisor/Dashboard';
import Product from './pages/supervisor/Product';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="supervisor"  element={<SupervisorLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<Product />} />
                </Route>
                <Route path="store-manager"  element={<StoreManagerLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<Product />} />
                </Route>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
