import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Space } from "../Space/Space";
import "./Footer.css";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#c9e900", padding: "16px" }}>
      <Space height={16} />
      <div className="links">
        <Link to="/">利用規約</Link>
        <Space height={8} />
        <Link to="/">プライバシーポリシー</Link>
        <Space height={8} />
        <Link to="/">運営会社</Link>
        <Space height={8} />
        <Link to="/">特定商取引法の記載</Link>
        <Space height={8} />
        <Link to="/">よくある質問・お問い合わせ</Link>
      </div>
      <Space height={16} />
      <p>©️hoge</p>
      <Space height={68} />
    </div>
  );
};
