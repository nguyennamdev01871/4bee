import "./SideBar.css";
import { useLocation, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdReceipt, MdLocalOffer, MdStore } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdSettings } from 'react-icons/md';
import { MdHelpOutline, MdHelp } from 'react-icons/md';

function SideBar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <img src="path/to/your/logo.jpg" alt="Logo" className="logo-img" />
        <h1 className="logo-text">4Bee</h1>
      </div>

      {/* Navigation */}
      <p className="section-title">GENERAL</p>
      <div className="control">
        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              end
            >
              <FaHome size={24} className="nav-icon" />
              Tổng Quan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/donhang"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <MdReceipt size={24} className="nav-icon" />
              Đơn Hàng
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/khachhang"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <BsPerson size={24} className="nav-icon" />
              Khách Hàng
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/khuyenmai"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <MdLocalOffer size={24} className="nav-icon" />
              Khuyến Mãi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/sanpham"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              <MdStore size={24} className="nav-icon" />
              Sản Phẩm
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Settings */}
      <div className="setting">
        <ul>
          <li>
          

            <a href="#" className="setting-link">
            <MdSettings size={24} className="nav-icon" />
              Setting</a>
          </li>
          <li>
     

            <a href="#" className="setting-link">
            <MdHelpOutline size={24} className="nav-icon" />
              Help</a>
          </li>
        </ul>
      </div>

      {/* Account Information */}
      <div className="account">
        <img
          src="path/to/avatar.jpg"
          alt="Account Avatar"
          className="avatar"
        />
        <div className="account-info">
          <p className="username">Nguyen Duy Khanh</p>
          <span className="email">duykhanhdev04@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
