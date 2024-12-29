import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <Container>
        <Row className="align-items-center">
          {/* Left side - Image */}
          <Col md={8} className="newsletter-image-col">
            <img
              src="/images/newsletter-image.jpg"
              alt="Newsletter"
              className="newsletter-image"
            />
          </Col>

          {/* Right side - Newsletter Form */}
          <Col md={4}>
            <div className="newsletter-form text-center">
              <h2 className="newsletter-title">Đăng ký nhận tin</h2>
              <p className="newsletter-description">
                Đăng ký để nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
              </p>
              <Form className="d-flex flex-column gap-2">
                <Form.Control
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="text-center"
                />
                <Button className="newsletter-btn w-100">Đăng Ký</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
