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
import Test from './pages/test'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<ProtectedRoute />}>
                    <Route element={<Dashboard />} path="/console" />
                </Route>
                <Route element={<Home />} path="/dashboard" />
                <Route element={<About />} path="/about" />
                <Route element={<Catalog />} path="/catalog" />
                <Route element={<Checkout />} path="/checkout" />
                <Route element={<Politika />} path="/politika" />
                <Route element={<Agreement />} path="/agreement" />
                <Route element={<PaymentPage />} path="/payment_and_delivery" />
                <Route element={<SupportPage />} path="/support" />
                <Route element={<Test />} path="/test" />
                <Route element={<Error />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default App