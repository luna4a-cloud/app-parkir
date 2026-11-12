
import DashboardLayout from '../layouts/DashboardLayout';
import {
  Car,
  ParkingSquare,
  Users,
  Wallet
} from 'lucide-react';

import './Dashboard.css';

function Dashboard() {
  return (
    <DashboardLayout role="admin">

      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Selamat datang di Sistem Informasi ParkirKu</p>
      </div>

      <div className="dashboard-cards">

        <div className="stat-card">
          <Car size={28} />
          <div>
            <p>Total Kendaraan</p>
            <h3>120</h3>
          </div>
        </div>

        <div className="stat-card">
          <ParkingSquare size={28} />
          <div>
            <p>Slot Parkir Tersedia</p>
            <h3>45</h3>
          </div>
        </div>

        <div className="stat-card">
          <Users size={28} />
          <div>
            <p>Total Pengguna</p>
            <h3>25</h3>
          </div>
        </div>

        <div className="stat-card">
          <Wallet size={28} />
          <div>
            <p>Pendapatan Hari Ini</p>
            <h3>Rp750.000</h3>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;
