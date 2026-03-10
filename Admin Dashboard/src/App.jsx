import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PricingPage from "./components/PricingPage";
import Setting from "./components/Setting";
import ProductList from "./components/ProductList";
import ManageProduct from "./components/ManageProduct";

function App() {
    return (
        <>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pricing-page" element={<PricingPage />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/products/new" element={<ManageProduct />} />
                    <Route path="/product-list" element={<ProductList />} />
                    <Route
                        path="/products/:id/edit"
                        element={<ManageProduct />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
