import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdvertisingBanner from "./AdvertisingBanner";
import CustomNavbar from "./CustomNavbar";
import PromoSlider from "./PromoSlider";
import ProductCard from "./ProductCard";
import Features from "./Features";
import CategoryCard from "./CategoryCard";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "./trangchu.css";
function TrangChu() {
    // Sample product data
  const products = [
    { id: 1, title: "Áo Sơ Mi Trắng Cổ Điển", price: 599000 },
    { id: 2, title: "Áo Sơ Mi Xanh Oxford", price: 549000 },
    { id: 3, title: "Áo Sơ Mi Kẻ Sọc", price: 649000 },
    { id: 4, title: "Áo Sơ Mi Đen Công Sở", price: 699000 },
  ];

  const categories = [
    { id: 1, title: "Áo Sơ Mi Công Sở" },
    { id: 2, title: "Áo Sơ Mi Casual" },
    { id: 3, title: "Áo Sơ Mi Dự Tiệc" },
  ];

  return (
    <div className="app">
      <AdvertisingBanner />
      <CustomNavbar />
      <PromoSlider />
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/images/Banner.jpg" alt="Hero" className="w-100" />
      </div>
      <Container className="my-5">
        <h2 className="text-center mb-4">SẢN PHẨM BÁN CHẠY</h2>
        <Row>
          {products.map((product) => (
            <Col md={3} sm={6} key={product.id} className="mb-4">
              <ProductCard title={product.title} price={product.price} />
            </Col>
          ))}
        </Row>
      </Container>
      <Features />
      <Container className="my-5">
        <h2 className="text-center mb-4">DANH MỤC SẢN PHẨM</h2>
        <Row>
          {categories.map((category) => (
            <Col md={4} key={category.id} className="mb-4">
              <CategoryCard {...category} />
            </Col>
          ))}
        </Row>
      </Container>
      <Newsletter />

      <Footer />
    </div>
  );
}

export default TrangChu;
