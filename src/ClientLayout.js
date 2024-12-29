import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TrangChu from './page/client/TrangChu';
import { Routes, Route } from "react-router-dom";
function ClientLayout() {
  return (
    <div className="container">
      
      <Container>
        <Routes>
          <Route index element={<TrangChu />} />
         
        </Routes>
      </Container>
    </div>
  );
}

export default ClientLayout;
