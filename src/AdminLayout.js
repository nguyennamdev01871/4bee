import { Routes, Route } from "react-router-dom";
import SideBar from "./page/admin/SideBar/SideBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import DonHang from "./page/admin/Content/DonHang";
import KhachHang from "./page/admin/Content/KhachHang";
import KhuyenMai from "./page/admin/Content/KhuyenMai";
import SanPham from "./page/admin/Content/SanPham";
import Content from "./page/admin/Content/Content";

function AdminLayout() {
  return (
    <div className="container">
      <SideBar />
      <Container>
        <Routes>
          <Route index element={<Content />} />
          <Route path="donhang" element={<DonHang />} />
          <Route path="khachhang" element={<KhachHang />} />
          <Route path="khuyenmai" element={<KhuyenMai />} />
          <Route path="sanpham" element={<SanPham />} />
        </Routes>
      </Container>
    </div>
  );
}

export default AdminLayout;
