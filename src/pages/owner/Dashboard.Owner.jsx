
import './DashboardOwner.css';

function DashboardOwner() {
  return (
    <div className="owner-dashboard">
      <h1>Dashboard Owner</h1>
      <p>Selamat datang di Sistem Informasi ParkirKu.</p>

      <div className="owner-menu">
        <h3>Menu Owner</h3>
        <ul>
          <li>Rekap Transaksi Parkir</li>
          <li>Laporan Transaksi Berdasarkan Periode</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardOwner;
