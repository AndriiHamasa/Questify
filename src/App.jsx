import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
