import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SearchOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <div className="search-content">
        <button className="close-search" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm sản phẩm..."
            autoFocus
          />
        </div>
        <div className="search-suggestions">
          <p className="suggestion-title">Tìm kiếm phổ biến:</p>
          <div className="suggestions">
            <span>Áo sơ mi trắng</span>
            <span>Áo công sở</span>
            <span>Áo dài tay</span>
            <span>Hàng mới về</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
