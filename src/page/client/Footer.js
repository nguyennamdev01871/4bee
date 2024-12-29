import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcAmex,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="text-start">4BEE</h5>
            <p>Đường dây nóng: 1234 5678</p>
            <p>Giờ làm việc: 8:30 - 19:00 tất cả các ngày trong tuần</p>
            <div className="social-links mt-3">
              <a href="#facebook" className="me-3 social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#instagram" className="me-3 social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#twitter" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-start">Chăm sóc khách hàng</h5>
            <ul className="text-start">
              <li>Hướng dẫn chọn size</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách đổi trả</li>
              <li>Liên hệ</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-start">Về chúng tôi</h5>
            <ul className="text-start">
              <li>Câu chuyện 4BEE</li>
              <li>Tuyển dụng</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-start">Theo dõi chúng tôi</h5>
            <div className="social-icons text-start">
              <a href="#facebook" className="me-3 social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#instagram" className="me-3 social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#twitter" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <h5 className="mt-4 text-start">Phương thức thanh toán</h5>
            <div className="payment-methods text-start">
              <FontAwesomeIcon icon={faCcVisa} className="payment-icon" />
              <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
              <FontAwesomeIcon icon={faCcPaypal} className="payment-icon" />
              <FontAwesomeIcon icon={faCcAmex} className="payment-icon" />
            </div>
          </Col>
          <Col md={12}>
            <p className="mb-0">&copy; 2024 4BEE. Tất cả quyền được bảo lưu.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
