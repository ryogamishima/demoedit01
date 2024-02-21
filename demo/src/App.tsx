import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Personal from "./pages/Personal/Personal";
import Login from "./pages/Login/Login";
import Result from "./pages/Result/Result";
import Collection from "./pages/Collection/Collection";
import MyPage from "./pages/MyPage/MyPage";
import Shipping from "./pages/Shipping/Shipping";
import Viewer from "./pages/Viewer/Viewer";
import Reset from "./pages/Reset/Reset";
import Complete from "./pages/Complete/Complete";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        textAlign: "center",
        maxWidth: "720px",
      }}
    >
      <Router>
        <ScrollToTop />
        <Header />
        <div style={{ padding: "0px 16px", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<Result />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/viewer" element={<Viewer />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/complete" element={<Complete />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
