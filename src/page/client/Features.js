import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Features() {
  return (
    <div className="features-section py-5">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <div className="feature-item">
              <i className="bi bi-truck display-4"></i>
              <h4 className="mt-3">Miễn Phí Vận Chuyển</h4>
              <p className="text-muted">Cho đơn hàng trên 1.000.000đ</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-item">
              <i className="bi bi-arrow-repeat display-4"></i>
              <h4 className="mt-3">Đổi Trả Dễ Dàng</h4>
              <p className="text-muted">30 ngày đổi trả miễn phí</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-item">
              <i className="bi bi-shield-check display-4"></i>
              <h4 className="mt-3">Thanh Toán An Toàn</h4>
              <p className="text-muted">Bảo mật thông tin 100%</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
