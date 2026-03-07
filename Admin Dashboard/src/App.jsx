import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PricingPage from "./components/PricingPage";
import Setting from "./components/Setting";
import NewProduct from "./components/NewProduct";

function App() {
    return (
        <>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pricing-page" element={<PricingPage />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/new-product" element={<NewProduct />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
