import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.scss';

import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { Home } from './views/Home';
import { Products } from './views/Products';
import { ProductDetails } from './views/ProductDetails';
import { Cart } from './views/Cart';
import { Auth } from './views/Auth';
import { UserMessage } from './components/UserMessage';

function App() {

    return (
        <Router>
            <div className="App">
                <AppHeader></AppHeader>
                <Routes>
                    <Route element={<Home />} path='/'></Route>
                    <Route element={<Products />} path='/product'></Route>
                    <Route element={<ProductDetails />} path='/product/:id'></Route>
                    <Route element={<Cart />} path='/cart'></Route>
                    <Route element={<Auth />} path='/auth'></Route>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
                <AppFooter></AppFooter>
                <UserMessage></UserMessage>
            </div>
        </Router>
    );
}

export default App;
