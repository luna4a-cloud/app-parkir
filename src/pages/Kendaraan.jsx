
import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Search, Plus, X } from 'lucide-react';
import './Kendaraan.css';

function Kendaraan() {
  const [kataKunci, setKataKunci] = useState('');
  const [tampilForm, setTampilForm] = useState(false);

  const [dataKendaraan, setDataKendaraan] = useState([
    {
      plat: 'D 1234 ABC',
      jenis: 'Mobil',
      masuk: '08:00',
      keluar: '-',
      status: 'Sedang Parkir',
    },
    {
      plat: 'D 5678 DEF',
      jenis: 'Motor',
      masuk: '08:30',
      keluar: '10:00',
      status: 'Selesai',
    },
    {
      plat: 'D 9012 GHI',
      jenis: 'Mobil',
      masuk: '09:15',
      keluar: '-',
      status: 'Sedang Parkir',
    },
  ]);

  const [formData, setFormData] = useState({
    plat: '',
    jenis: 'Mobil',
    masuk: '',
  });

  const kendaraanTerfilter = dataKendaraan.filter((kendaraan) =>
    kendaraan.plat.toLowerCase().includes(kataKunci.toLowerCase())
  );

  function handleSubmit(event) {
    event.preventDefault();

    const kendaraanBaru = {
      plat: formData.plat.toUpperCase(),
      jenis: formData.jenis,
      masuk: formData.masuk,
      keluar: '-',
      status: 'Sedang Parkir',
    };

    setDataKendaraan([...dataKendaraan, kendaraanBaru]);

    setFormData({
      plat: '',
      jenis: 'Mobil',
      masuk: '',
    });

    setTampilForm(false);
  }

  return (
    <DashboardLayout role="admin">
      <div className="kendaraan-page">

        <div className="kendaraan-header">
          <div>
            <h2>Data Kendaraan</h2>
            <p>Kelola data kendaraan yang menggunakan area parkir.</p>
          </div>

          <button
            className="add-button"
            onClick={() => setTampilForm(true)}
          >
            <Plus size={18} />
            Tambah Kendaraan
          </button>
        </div>

        <div className="kendaraan-table-container">
          <div className="table-toolbar">
            <h3>Daftar Kendaraan</h3>

            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Cari plat nomor..."
                value={kataKunci}
                onChange={(event) => setKataKunci(event.target.value)}
              />
            </div>
          </div>

          <table className="kendaraan-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Plat Nomor</th>
                <th>Jenis</th>
                <th>Waktu Masuk</th>
                <th>Waktu Keluar</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {kendaraanTerfilter.length > 0 ? (
                kendaraanTerfilter.map((kendaraan, index) => (
                  <tr key={`${kendaraan.plat}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{kendaraan.plat}</td>
                    <td>{kendaraan.jenis}</td>
                    <td>{kendaraan.masuk}</td>
                    <td>{kendaraan.keluar}</td>
                    <td>
                      <span className={
                        kendaraan.status === 'Selesai'
                          ? 'status selesai'
                          : 'status parkir'
                      }>
                        {kendaraan.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    Kendaraan tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {tampilForm && (
          <div className="modal-overlay">
            <div className="modal-form">
              <div className="modal-header">
                <h3>Tambah Kendaraan</h3>

                <button
                  type="button"
                  className="close-button"
                  onClick={() => setTampilForm(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Plat Nomor</label>
                  <input
                    type="text"
                    placeholder="Contoh: D 1234 ABC"
                    value={formData.plat}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        plat: event.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Jenis Kendaraan</label>
                  <select
                    value={formData.jenis}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        jenis: event.target.value,
                      })
                    }
                  >
                    <option value="Mobil">Mobil</option>
                    <option value="Motor">Motor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Waktu Masuk</label>
                  <input
                    type="time"
                    value={formData.masuk}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        masuk: event.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setTampilForm(false)}
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    className="save-button"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Kendaraan;
