import React, {useState} from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setError("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            if (username == "admin" && password == "admin") {
                navigate("/home");
            } else {
                setError("نام کاربری یا رمز عبور اشتباه است");
            }
        }, 2000);
    };

    return (
    <div className="login-page">
      <div className="login-container">
        
        <div className="login-left">
          <h1>به سامانه رفاهی خوش آمدید</h1>
          <p>برای دسترسی به امکانات، لطفاً وارد شوید.</p>
        </div>

        
        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>ورود کاربران</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
              placeholder="نام کاربری"
              disabled={loading}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
              placeholder="رمز عبور"
              disabled={loading}
            />

            {error && <div className="login-error">{error}</div>}

            <button type="submit" disabled={loading}>
                {loading ? "در حال ورود..." : "ورود"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;