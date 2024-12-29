import React from "react";

function CategoryCard({ image, title }) {
  return (
    <div className="category-card">
      <img src={image || "images/sp2.png"} alt={title} className="w-100" />
      <h3 className="category-title">{title}</h3>
    </div>
  );
}

export default CategoryCard;
