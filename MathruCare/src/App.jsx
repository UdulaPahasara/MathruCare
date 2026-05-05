import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Login from './componets/Login/Login';
import ForgetPassword from './componets/Login/ForgetPassword';
import VerificationCode from './componets/Login/VerificationCode';
import NewPassword from './componets/Login/NewPassword';
import Share from './componets/Signup/share/share';
import Register from './componets/Signup/Register/Register';
import RegisterNext from './componets/Signup/Register/RegisterNext';
import MidwifeRegister from './componets/Signup/Register/MidwifeRegister';
import AdminSignup from './componets/Signup/Admin/AdminSignup';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  return (
   
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/share" element={<Share />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-next" element={<RegisterNext />} />
          <Route path="/midwife-register" element={<MidwifeRegister />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
  );
}

      export default App;
