import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { loadCartItems } from './store/cart/actions';
import './styles/main.scss';

import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { PopupMessage } from './components/PopupMessage';
import { Home } from './views/Home';
import { Products } from './views/Products';
import { ProductDetails } from './views/ProductDetails';
import { Cart } from './views/Cart';
import { Auth } from './views/Auth';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCartItems())
    }, [])
    

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
                <PopupMessage></PopupMessage>
            </div>
        </Router>
    );
}

export default App;
