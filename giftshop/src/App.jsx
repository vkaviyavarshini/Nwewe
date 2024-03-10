import  { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { store } from './pages/redux/store';
import { persistor,store } from './redux/store';

import {PersistGate} from 'redux-persist/integration/react';


//const UserOrAdmin = lazy(() => import('./pages/useroradmin'));
const AdminLogin = lazy(() => import('./pages/adminlogin'));
const Login = lazy(() => import('./pages/login'));
const PaymentPage = lazy(() => import('./pages/payment'));
const AdminRegister = lazy(() => import('./pages/Adminregister'));
const Register = lazy(() => import('./pages/register'));
const Home = lazy(() => import('./pages/home'));
const Guide = lazy(() => import('./pages/guide'));
const About = lazy(() => import('./pages/about'));
const UserProfile = lazy(() => import('./pages/userprofile'));
// const BirthdayGifts = lazy(() => import('./pages/gifts/hbdgifts'));
const Gifts = lazy(() => import('./pages/gifts'));
const Cakes = lazy(() => import('./pages/cake'));
// const GiftsForHer = lazy(() => import('./pages/gifts/hergifts'));
// const GiftsForHim = lazy(() => import('./pages/gifts/himgifts'));
// const Collections = lazy(() => import('./pages/gifts/collections'));
// const WeddingGifts = lazy(() => import('./pages/gifts/wedding'));
// const OccasionGifts = lazy(() => import('./pages/gifts/occasiongifts'));
// const NeonGifts = lazy(() => import('./pages/gifts/neongifts'));
// const Range1 = lazy(() => import('./pages/photoframes/range1'));
// const Range2 = lazy(() => import('./pages/photoframes/range2'));
// const Range3 = lazy(() => import('./pages/photoframes/range3'));
// const Range4 = lazy(() => import('./pages/photoframes/range4'));
// const Range5 = lazy(() => import('./pages/photoframes/range5'));
// const Range6 = lazy(() => import('./pages/photoframes/range6'));
// const Range7 = lazy(() => import('./pages/photoframes/range7'));
const Contact = lazy(() => import('./pages/contact'));
const UserTable = lazy(() => import('./pages/vendordashboard'));
const CartPage = lazy(() => import('./pages/cart'));

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes>
        {/* <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><UserOrAdmin /></Suspense>}></Route> */}
        <Route path='/admin/login' element={<Suspense fallback={<div>Loading...</div>}><AdminLogin /></Suspense>}></Route>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}></Route>
        <Route path='/admin/reg' element={<Suspense fallback={<div>Loading...</div>}><AdminRegister /></Suspense>}></Route>
        <Route path='/reg' element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>}></Route>
        <Route path='/home' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}></Route>
        <Route path='/guide' element={<Suspense fallback={<div>Loading...</div>}><Guide /></Suspense>}></Route>
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>}></Route>
        <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}><CartPage/></Suspense>}></Route>
        <Route path='/user' element={<Suspense fallback={<div>Loading...</div>}><UserProfile /></Suspense>}></Route>
        <Route path='/pay' element={<Suspense fallback={<div>Loading...</div>}><PaymentPage /></Suspense>}></Route>
        {/* <Route path='/hbd' element={<Suspense fallback={<div>Loading...</div>}><BirthdayGifts /></Suspense>}></Route> */}
        <Route path='/gifts' element={<Suspense fallback={<div>Loading...</div>}><Gifts /></Suspense>}></Route>
        <Route path='/cakes' element={<Suspense fallback={<div>Loading...</div>}><Cakes /></Suspense>}></Route>
        {/* <Route path='/him' element={<Suspense fallback={<div>Loading...</div>}><GiftsForHim /></Suspense>}></Route>
        <Route path='/her' element={<Suspense fallback={<div>Loading...</div>}><GiftsForHer /></Suspense>}></Route>
        <Route path='/coll' element={<Suspense fallback={<div>Loading...</div>}><Collections /></Suspense>}></Route>
        <Route path='/wed' element={<Suspense fallback={<div>Loading...</div>}><WeddingGifts /></Suspense>}></Route>
        <Route path='/occ' element={<Suspense fallback={<div>Loading...</div>}><OccasionGifts /></Suspense>}></Route>
        <Route path='/neon' element={<Suspense fallback={<div>Loading...</div>}><NeonGifts /></Suspense>}></Route>
        <Route path='/b500' element={<Suspense fallback={<div>Loading...</div>}><Range1 /></Suspense>}></Route>
        <Route path='/b1000' element={<Suspense fallback={<div>Loading...</div>}><Range2 /></Suspense>}></Route>
        <Route path='/b2000' element={<Suspense fallback={<div>Loading...</div>}><Range3 /></Suspense>}></Route>
        <Route path='/b3000' element={<Suspense fallback={<div>Loading...</div>}><Range4 /></Suspense>}></Route>
        <Route path='/b4000' element={<Suspense fallback={<div>Loading...</div>}><Range5 /></Suspense>}></Route>
        <Route path='/b5000' element={<Suspense fallback={<div>Loading...</div>}><Range6 /></Suspense>}></Route>
        <Route path='/a5000' element={<Suspense fallback={<div>Loading...</div>}><Range7 /></Suspense>}></Route> */}
        <Route path='/contact' element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>}></Route>
        <Route path='/admin/usertable' element={<Suspense fallback={<div>Loading...</div>}><UserTable /></Suspense>}></Route>
      </Routes>
      </PersistGate>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
