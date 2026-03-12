import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Home/Dashboard";
import Analytics from "./components/Home/Analytics";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import PricingPage from "./components/Pages/PricingPage";
import Setting from "./components/Pages/Account/Setting";
import ProductList from "./components/E-commerce/Products/ProductList";
import ManageProduct from "./components/E-commerce/Products/ManageProduct";
import ProfileOverview from "./components/Pages/Profile/ProfileOverview";
import Teams from "./components/Pages/Profile/Teams";
import AllProjects from "./components/Pages/Profile/AllProjects";
import Reports from "./components/Pages/User/Reports";
import NewUser from "./components/Pages/User/NewUser";
import Charts from "./components/Pages/Charts";
import Kanban from "./components/Application/Kanban";
import Wizard from "./components/Application/Wizard";
import Overview from "./components/E-commerce/Products/Overview";
import OrderList from "./components/E-commerce/Orders/OrderList";
import OrderDetails from "./components/E-commerce/Orders/OrderDetails";
import Billing from "./components/Pages/Account/Billing";
import Invoice from "./components/Pages/Account/Invoice";
import Security from "./components/Pages/Account/Security";
import General from "./components/Pages/Projects/General";
import TimeLine from "./components/Pages/Projects/TimeLine";
import NewProject from "./components/Pages/Projects/NewProject";
import Chat from "./components/Pages/Chat";
import DataTables from "./components/Application/DataTables";
import Calender from "./components/Application/Calender";

function App() {
    return (
        <>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route
                        path="/profile/profile-overview"
                        element={<ProfileOverview />}
                    />
                    <Route path="/profile/teams" element={<Teams />} />
                    <Route
                        path="/profile/all-projects"
                        element={<AllProjects />}
                    />
                    <Route path="/user/reports" element={<Reports />} />
                    <Route path="/user/new-user" element={<NewUser />} />
                    <Route path="/account/setting" element={<Setting />} />
                    <Route path="/account/billing" element={<Billing />} />
                    <Route path="/account/invoice" element={<Invoice />} />
                    <Route path="/account/security" element={<Security />} />
                    <Route path="/projects/general" element={<General />} />
                    <Route path="/projects/timeline" element={<TimeLine />} />
                    <Route
                        path="/projects/new-project"
                        element={<NewProject />}
                    />
                    <Route path="/pricing-page" element={<PricingPage />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/application/kanban" element={<Kanban />} />
                    <Route path="/application/wizard" element={<Wizard />} />
                    <Route
                        path="/application/data-tables"
                        element={<DataTables />}
                    />
                    <Route
                        path="/application/calender"
                        element={<Calender />}
                    />
                    <Route path="/e-commerce/overview" element={<Overview />} />
                    <Route
                        path="/e-commerce/products/new-product"
                        element={<ManageProduct />}
                    />
                    <Route
                        path="/e-commerce/products/:id/edit"
                        element={<ManageProduct />}
                    />
                    <Route
                        path="/e-commerce/products/product-list"
                        element={<ProductList />}
                    />
                    <Route
                        path="/e-commerce/orders/order-list"
                        element={<OrderList />}
                    />
                    <Route
                        path="/e-commerce/orders/order-detail"
                        element={<OrderDetails />}
                    />
                </Route>
                <Route path="/auth/sign-up" element={<SignUp />} />
                <Route path="/auth/login" element={<Login />} />
                <Route
                    path="/auth/forget-password"
                    element={<ForgetPassword />}
                />
            </Routes>
        </>
    );
}

export default App;
