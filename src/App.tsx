import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import ProtectedRoute from "./utils/protectedRoute"
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import About from './pages/about'
import Catalog from './pages/catalog'
import Checkout from './pages/checkout'
import Politika from './pages/politika'
import Agreement from './pages/agreement'
import PaymentPage from './pages/payment'
import SupportPage from './pages/support'
import Error from './pages/error'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" errorElement={<Error />} />
                <Route element={<Login />} path="/login" errorElement={<Error />} />
                <Route element={<ProtectedRoute />}>
                    <Route element={<Dashboard />} path="/dashboard" errorElement={<Error />} />
                </Route>
                <Route element={<Home />} path="/dashboard" errorElement={<Error />} />
                <Route element={<About />} path="/about" errorElement={<Error />} />
                <Route element={<Catalog />} path="/catalog" errorElement={<Error />} />
                <Route element={<Checkout />} path="/checkout" errorElement={<Error />} />
                <Route element={<Politika />} path="/politika" errorElement={<Error />} />
                <Route element={<Agreement />} path="/agreement" errorElement={<Error />} />
                <Route element={<PaymentPage />} path="/payment_and_delivery" errorElement={<Error />} />
                <Route element={<SupportPage />} path="/support" errorElement={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App