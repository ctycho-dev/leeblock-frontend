import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import ProtectedRoute from "./components/protectedRoute"
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import About from './pages/about'
import ProfilePage from './pages/profile'
import Catalog from './pages/catalog'
import Checkout from './pages/checkout'
import Politika from './pages/politika'
import Agreement from './pages/agreement'
import PaymentPage from './pages/payment'
import SupportPage from './pages/support'
import Error from './pages/error'
import Verify from './pages/verify'
import Orders from "./pages/orders"
import { AuthProvider } from "./authProvider";

const App = () => {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Verify />} path="/verify/:token" />
                    <Route element={<About />} path="/about" />
                    <Route element={<Catalog />} path="/catalog" />
                    <Route element={<Checkout />} path="/checkout" />
                    <Route element={<Politika />} path="/politika" />
                    <Route element={<Agreement />} path="/agreement" />
                    <Route element={<PaymentPage />} path="/payment_and_delivery" />
                    <Route element={<SupportPage />} path="/support" />
                    {/* <Route element={<Signup />} path="/signup" /> */}
                    <Route element={<ProtectedRoute />}>
                        <Route element={<Dashboard />} path="/dashboard" />
                        <Route element={<ProfilePage />} path="/profile" />
                        <Route element={<Orders />} path="/orders" />
                    </Route>
                    <Route element={<Error />} path="*" />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App