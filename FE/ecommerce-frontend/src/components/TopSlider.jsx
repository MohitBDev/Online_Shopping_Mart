import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
      
        <div className="wdt ">
          <img className="img" alt="pic1" src={"assets/Dairy2.jpg"} />
        </div>
        <div className="wdt ">
          <img className="img" alt="pic1" src={"assets/sale.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/header2.jpg"} />
        </div>
        <div className="wdt ">
          <img className="img" alt="pic1" src={"assets/os.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/Gros1.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/gro.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/Handcraft.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/court.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/clo.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/header3.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/del1.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/del2.jpg"} />
        </div>
      </Slider>
    </>
  );
}

export default TopSlider;
