import { Routes, Route } from "react-router-dom";
import DashboardLayout from "/src/components/DashboardLayout";
import Dashboard from "/src/components/home/dashboard/Dashboard";
import Analytics from "/src/components/home/analytics/Analytics";
import ForgetPassword from "/src/components/auth/ForgetPassword";
import Login from "/src/components/auth/Login";
import SignUp from "/src/components/auth/SignUp";
import PricingPage from "/src/components/pages/PricingPage";
import Setting from "/src/components/pages/Account/Setting";
import ProductList from "/src/components/e-commerce/Products/ProductList";
import ManageProduct from "/src/components/e-commerce/Products/ManageProduct";
import ProfileOverview from "/src/components/pages/profile/ProfileOverview";
import Teams from "/src/components/pages/profile/Teams";
import AllProjects from "/src/components/pages/profile/AllProjects";
import Reports from "/src/components/pages/user/Reports";
import Newuser from "/src/components/pages/user/Newuser";
import Charts from "/src/components/pages/Charts";
import Kanban from "/src/components/Application/Kanban";
import Wizard from "/src/components/Application/Wizard";
import Overview from "/src/components/e-commerce/products/Overview";
import OrderList from "/src/components/e-commerce/orders/OrderList";
import OrderDetails from "/src/components/e-commerce/orders/OrderDetails";
import Billing from "/src/components/pages/account/Billing";
import Invoice from "/src/components/pages/account/Invoice";
import Security from "/src/components/pages/account/Security";
import General from "/src/components/pages/projects/General";
import TimeLine from "/src/components/pages/projects/TimeLine";
import NewProject from "/src/components/pages/projects/NewProject";
import Chat from "/src/components/pages/Chat";
import DataTables from "/src/components/application/DataTables";
import Calender from "/src/components/application/Calender";

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
                    <Route path="/user/new-user" element={<Newuser />} />
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
                        path="/e-commerce/orders/:id/edit"
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
