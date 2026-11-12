
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>ParkirKu</h1>
        <p className="login-subtitle">
          Sistem Informasi Manajemen Parkir
        </p>

        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <p className="login-footer">
          © 2026 ParkirKu
        </p>
      </div>
    </div>
  );
}

export default Login;
