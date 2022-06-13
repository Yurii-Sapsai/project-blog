import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginPage from './pages/AdminPage/LoginPage/LoginPage'
import RegistrationPage from "./pages/AdminPage/RegistrationPage/RegistrationPage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {REPO_NAME} from './repo'

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./services/ProtectedRoute";


function App() {

  return (
    <div >
      <Router basename={REPO_NAME}>
        <AuthContextProvider>

          <Header />

          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/admin/" element={<ProtectedRoute> <AdminPage /> </ProtectedRoute>} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/registration" element={<RegistrationPage />} />

          </Routes>

        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
