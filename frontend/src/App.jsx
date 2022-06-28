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
import { Checkout } from './views/Checkout';
import { Auth } from './views/Auth';
import { sessionStore } from './services/utils';
import { Profile } from './views/Profile';
import { ProfileDetails } from './components/ProfileCmps/ProfileDetails';
import { ProfileOrders } from './components/ProfileCmps/ProfileOrders';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCartItems())
        // dispatch()
    }, [dispatch])
    

    return (
        <Router>
            <div className="App">
                <AppHeader></AppHeader>
                <Routes>
                    <Route element={<Products />} path='/product'></Route>
                    <Route element={<ProductDetails />} path='/product/:id'></Route>
                    <Route element={<Cart />} path='/cart'></Route>
                    {/* <Route element={<Profile />} path='/profile'></Route> */}
                    <Route element={<Auth />} path='/auth'></Route>
                    <Route element={<Auth />} path='/auth/:navTo'></Route>

                    <Route path='/checkout' element={
                        <ProtectedRoute redirectPath='/auth/checkout'>
                            <Checkout/>
                        </ProtectedRoute>}>
                    </Route>

                    <Route path='/profile' element={
                        <ProtectedRoute redirectPath='/auth/profile&details'>
                            <Profile>
                            </Profile>
                        </ProtectedRoute>}>
                        <Route path='details' element={<ProfileDetails />} />
                        <Route path='orders' element={<ProfileOrders />} />
                    </Route>

                    <Route element={<Home />} path='/'></Route>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
                <AppFooter></AppFooter>
                <PopupMessage></PopupMessage>
            </div>
        </Router>
    );
}

const ProtectedRoute = ({ redirectPath = '/', children }) => {
    const user = sessionStore.get('loggedUser')
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

export default App;
