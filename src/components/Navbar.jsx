import { Bell, UserCircle } from 'lucide-react';
import './Navbar.css';

function Navbar({ role = 'admin' }) {
  return (
    <header className="navbar">
      <div>
        <h3>Dashboard</h3>
        <p>Sistem Informasi ParkirKu</p>
      </div>

      <div className="navbar-user">
        <Bell size={20} />

        <div className="user-info">
          <UserCircle size={28} />
          <div>
            <strong>{role.toUpperCase()}</strong>
            <span>Pengguna ParkirKu</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;