import './DashboardAdmin.css';
function DashboardAdmin() {
return (
  <div className="admin-dashboard">
    <h1>Dashboard Admin</h1>
    <p>Selamat datang di Sistem Informasi ParkirKu.</p>

    <div className="admin-menu">
      <h3>Menu Admin</h3>
      <ul>
        <li>Kelola User</li>
        <li>Kelola Tarif Parkir</li>
        <li>Kelola Area Parkir</li>
        <li>Kelola Kendaraan</li>
        <li>Log Aktivitas</li>
      </ul>
    </div>
  </div>
);
}

export default DashboardAdmin;
