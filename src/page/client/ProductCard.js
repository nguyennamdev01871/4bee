import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

function ProductCard({ image, title, price }) {
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="product-card border-0">
        <div className="product-image-container">
          <Card.Img
            variant="top"
            src={image || "/images/sp1.jpg"}
          />
          <div className="product-overlay">
            <button className="btn btn-light btn-sm">Xem Nhanh</button>
            <button className="btn btn-dark btn-sm">Thêm Vào Giỏ</button>
          </div>
        </div>
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{formatPrice(price)}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
