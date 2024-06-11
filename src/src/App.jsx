// Importing required modules and components from the react-router-dom and other files.
import { Routes, Route, Navigate } from "react-router-dom";
import LoginView from "./views/LoginView";
import { useAuth } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import DashboardView from "./views/DashboardView";
import VideoDetails from "./views/VideoDetails";
import NotificationView from "./views/Notification";

// Main App component
const App = () => {
  // Extracting 'token' and 'user' from the authentication context
  const { token, user } = useAuth();

  return (
    <Routes>
      {/* Root route: Redirects to chat if the user is logged in, else to the login page */}

      {/* Private chat route: Can only be accessed by authenticated users */}
      <Route
        path="/dashboard"
        element={<PrivateRoute element={DashboardView} />}
      />
      <Route
        path="/notification"
        element={<PrivateRoute element={NotificationView} />}
      />

      {/* Public login route: Accessible by everyone */}
      <Route
        path="/login"
        element={<PublicRoute element={LoginView} />}
      />
      <Route
        path="/video/:videoId"
        element={<PublicRoute element={VideoDetails} />}
      />

      {/* Wildcard route for undefined paths. Shows a 404 error */}
      <Route path="*" element={<p>404 Not found</p>} />
    </Routes>
  );
};

// Exporting the App component to be used in other parts of the application
export default App;