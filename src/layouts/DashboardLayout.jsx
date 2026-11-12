
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './DashboardLayout.css';

function DashboardLayout({ children, role = 'admin' }) {
  return (
    <div className="dashboard-layout">
      <Sidebar role={role} />

      <div className="dashboard-main">
        <Navbar role={role} />

        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
