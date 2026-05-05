import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componets/Login/Login';
import ForgetPassword from './componets/Login/ForgetPassword';
import VerificationCode from './componets/Login/VerificationCode';
import NewPassword from './componets/Login/NewPassword';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
