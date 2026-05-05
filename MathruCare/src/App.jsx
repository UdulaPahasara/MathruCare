import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componets/Login/Login';
import ForgetPassword from './componets/Login/ForgetPassword';
import VerificationCode from './componets/Login/VerificationCode';
import NewPassword from './componets/Login/NewPassword';
import Share from './componets/Signup/share/share';
import Register from './componets/Signup/Register/Register';
import RegisterNext from './componets/Signup/Register/RegisterNext';
import './App.css';

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
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
