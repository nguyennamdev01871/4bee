import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientLayout from "./ClientLayout";
import AdminLayout from "./AdminLayout";
import DonHang from "./page/admin/Content/DonHang";
import KhachHang from "./page/admin/Content/KhachHang";
import KhuyenMai from "./page/admin/Content/KhuyenMai";
import SanPham from "./page/admin/Content/SanPham";
import Content from "./page/admin/Content/Content";

// Route bảo vệ cho Admin (nếu có yêu cầu kiểm tra quyền)
function ProtectedAdminRoute({ element }) {
  const isAuthenticated = true;  // Logic kiểm tra quyền truy cập admin (ví dụ: check token, session...)
  
  if (!isAuthenticated) {
    return <div>Access Denied</div>;  // Nếu không có quyền, trả về thông báo lỗi
  }

  return element;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes cho phần Client */}
        <Route path="/" element={<ClientLayout />} />
        <Route path="donhang" element={<DonHang />} />

        {/* Routes cho phần Admin */}
        <Route path="/admin" element={<ProtectedAdminRoute element={<AdminLayout />} />}>
          <Route index element={<Content />} />
          <Route path="donhang" element={<DonHang />} />
          <Route path="khachhang" element={<KhachHang />} />
          <Route path="khuyenmai" element={<KhuyenMai />} />
          <Route path="sanpham" element={<SanPham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
