import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

function AdvertisingBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="advertising-banner">
      <Container fluid className="px-0">
        <Slider {...settings}>
          <div className="banner-item bg-dark text-white">
            <p>Miễn phí vận chuyển cho đơn hàng trên 1.000.000đ 🚚</p>
          </div>
          <div className="banner-item bg-primary text-white">
            <p>Bộ sưu tập mới đã có mặt! 🎉</p>
          </div>
          <div className="banner-item bg-success text-white">
            <p>Khuyến mãi đặc biệt: Giảm 20% tất cả áo sơ mi! 🔥</p>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default AdvertisingBanner;
