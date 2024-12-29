import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PromoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="promo-slider">
      <Slider {...settings}>
        <div className="promo-slide">
          <img
            src="/images/slide1_2.webp"
            alt="Khuyến mãi 1"
            className="w-100"
          />
          {/* <div className="promo-content">
            <h2>Bộ Sưu Tập Mùa Hè</h2>
            <p>Giảm giá đến 50%</p>
            <button className="btn btn-light">Mua Ngay</button>
          </div> */}
        </div>
        <div className="promo-slide">
          <img
            src="/images/Sale.webp"
            alt="Khuyến mãi 2"
            className="w-100"
          />
          {/* <div className="promo-content">
            <h2>Hàng Mới Về</h2>
            <p>Khám phá các mẫu áo mới nhất</p>
            <button className="btn btn-light">Xem Thêm</button>
          </div> */}
        </div>
        <div className="promo-slide">
          <img
            src="/images/slide3.webp"
            alt="Khuyến mãi 3"
            className="w-100"
          />
          {/* <div className="promo-content">
            <h2>Bộ Sưu Tập Đặc Biệt</h2>
            <p>Phong cách độc đáo</p>
            <button className="btn btn-light">Khám Phá Ngay</button>
          </div> */}
        </div>
      </Slider>
    </div>
  );
}

export default PromoSlider;
