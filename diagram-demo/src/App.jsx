import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};
export default App;
