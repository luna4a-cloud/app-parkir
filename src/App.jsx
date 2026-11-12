
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Kendaraan from './pages/Kendaraan';

function App() {
  return (
    <Routes>
      {/* Halaman Login */}
      <Route
        path="/"
        element={<Login />}
      />

      {/* Halaman Dashboard Admin */}
      <Route
        path="/admin"
        element={<Dashboard />}
      />

      {/* Halaman Data Kendaraan */}
      <Route
        path="/admin/kendaraan"
        element={<Kendaraan />}
      />

      {/* Jika halaman tidak ditemukan */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
