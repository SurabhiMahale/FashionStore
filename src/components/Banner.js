import { Carousel } from "react-bootstrap";
import banner01 from "../assets/banner01.jpg"
import banner02 from "../assets/banner02.jpg"
import '../css/banner.css'
import { useNavigate } from "react-router-dom";

function CustomCarousel ()  {
  const navigate = useNavigate();
  return (
    <Carousel fade className="banner-card" interval={1000}>
      <Carousel.Item >
        <img
          className="d-block w-100 h-25"
          src={banner01}
          alt="Random First slide"
        />

        <Carousel.Caption>
          <h1>SUMMER COLLECTION</h1>
          <h3>30% OFF</h3>
          <button className="form-banner-btn"
          onClick={() => {
            // setLoginStatus(null);
            navigate("/category/women", { replace: true });}}
        >SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          // src="https://source.unsplash.com/mens/fashion/1000x410"
          src={banner02}
          // src={YellowBanner}
          alt="Random First slide"
        />

        <Carousel.Caption>
          <h1>MEN'S COLLECTION</h1>
          <h3>LIMITED EDITION</h3>

          <button className="form-banner-btn"
            onClick={() => {
              // setLoginStatus(null);
              navigate("/category/men", { replace: true });}}
          >SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
