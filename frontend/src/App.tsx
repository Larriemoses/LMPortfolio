import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import ServicesPage from "./pages/ServicesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";

function AppWrapper() {
  const location = useLocation();

  // Hide NavBar on protected routes
  const hiddenRoutes = ["/dashboard", "/profile"];
  const hideNav = hiddenRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideNav && <NavBar />}
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
