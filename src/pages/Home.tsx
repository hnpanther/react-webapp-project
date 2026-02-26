
import { useNavigate } from "react-router-dom";
import "./styles/Home.css"
import homeImage from "../assets/home_image.jpg"

function Home() {

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div className="home-page">
      <div className="home-content">
        <div className="home-text">
          <h1>به سامانه رفاهی خوش آمدید</h1>
          <p>
            این سامانه به شما امکان مدیریت درخواست‌ها و استفاده از خدمات رفاهی را می‌دهد.
            برای شروع، لطفاً وارد سیستم شوید.
          </p>
          <button onClick={goToLogin}>ورود به سامانه</button>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="سامانه رفاهی" />
        </div>
      </div>
    </div>
    );
}

export default Home;