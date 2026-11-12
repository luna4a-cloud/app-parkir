import './Sidebar.css';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Car, Receipt, FileText, MapPin, History, LogOut } from 'lucide-react';

function Sidebar({ role = 'admin' }) {
  const menus = {
    admin: [
      { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
      { label: 'Kelola User', path: '/admin/users', icon: Users },
      { label: 'Tarif Parkir', path: '/admin/tarif', icon: Receipt },
      { label: 'Area Parkir', path: '/admin/area', icon: MapPin },
      { label: 'Kendaraan', path: '/admin/kendaraan', icon: Car },
      { label: 'Log Aktivitas', path: '/admin/log', icon: History },
    ],
    petugas: [
      { label: 'Dashboard', path: '/petugas', icon: LayoutDashboard },
      { label: 'Transaksi', path: '/petugas/transaksi', icon: Receipt },
      { label: 'Cetak Struk', path: '/petugas/struk', icon: FileText },
    ],
    owner: [
      { label: 'Dashboard', path: '/owner', icon: LayoutDashboard },
      { label: 'Rekap Transaksi', path: '/owner/rekap', icon: FileText },
    ],
  };

  return (
    <aside className="sidebar">
      <h2>ParkirKu</h2>

      <p className="sidebar-role">
        {role.toUpperCase()}
      </p>

      <nav>
        {menus[role].map((menu) => {
          const Icon = menu.icon;

          return (
            <Link key={menu.path} to={menu.path}>
              <Icon size={18} />
              <span>{menu.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="logout-button">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
