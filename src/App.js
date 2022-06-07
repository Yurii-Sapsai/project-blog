import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginPage from './pages/AdminPage/LoginPage/LoginPage'
import RegistrationPage from "./pages/AdminPage/RegistrationPage/RegistrationPage";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import { useAuth } from './hooks/use-auth';

function App() {

  const {isAuth} = useAuth()

  return (
    <div >
      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />

          {isAuth
            ? <Route path="/admin" element={<AdminPage />} />
            : <Route path="/admin" element={<Navigate to="/admin/login" />} />}

          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/registration" element={<RegistrationPage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
