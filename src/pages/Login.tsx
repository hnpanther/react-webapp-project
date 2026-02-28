import React, {useState} from "react";
import { useEffect } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "./auth/Auth";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    const payload = decodeToken();

    if (payload) {
      navigate("/portal", { replace: true });
    }
  }, [navigate]);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setError("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            if (username == "admin" && password == "admin") {
                localStorage.setItem("authWebToken", 
                  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJxdWFya3VzLWFwcCIsInVwbiI6ImFkbWluIiwiZ3JvdXBzIjpbIkFETUlOIl0sImp0aSI6ImMwZjU0ZjBkLWRjNDUtNGExMy1hMGNlLTUyOGFiMDY3MDYwNSIsImlhdCI6MTc3MTkyMjExNywiZXhwIjoxNzcxOTIzOTE3fQ.o8KmCbarx-XVAHPloTYmZ6ZL_r9dZ-0pEP6nwAEERpBn3uKxIwyfznsk3ixhZh963gYo4ErdvHFhvIUfXPKILlDydRsxRudHxfZDmLOKzfO-G_fAFvKVjxUXZpDOUT8bjDBKuu7951aT01WTf5V8VW_HIxdeTfdDLF0wN527GdG-8IIVdXMGH1uFMVjgM8gP2imb96D_Qa3SDTOyj7IT_8Hn8WEwKk34diFWHiWiGeBrRrKyQOA9f2ZdDQIEG1pvZqeMjEpAXHjzEWl7b3cB9wZUIsEwfjQJkP8_4aUsDYbSP0o91mMQ068NJja5SitkjOzlrIujGbKEn85MsvNe0w"
                );
                console.log("login is ok!");
                navigate("/portal");
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