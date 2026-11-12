import './DashboardPetugas.css';
function DashboardPetugas() {
  return (
    <div className="petugas-dashboard">
      <h1>Dashboard Petugas</h1>
      <p>Selamat datang di Sistem Informasi ParkirKu.</p>

      <div className="petugas-menu">
        <h3>Menu Petugas</h3>
        <ul>
          <li>Transaksi Parkir</li>
          <li>Cetak Struk Parkir</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardPetugas;
