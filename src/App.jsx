import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
      {/* <Route path="/" element={ <Layout/>} /> */}
    </Routes>
  );
};

export default App;


