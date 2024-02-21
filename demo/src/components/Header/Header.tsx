import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Header.css";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <h1>ロゴ</h1>
        </Link>
      </div>
      {isLogin ? (
        <div className="header-links">
          <div className="header-link">
            <Link to="/shipping">
              <p>配送管理</p>
            </Link>
          </div>
          <div className="header-link">
            <Link to="/collection">
              <p>コレクション</p>
            </Link>
          </div>
          <div className="header-link">
            <Link to="/mypage">
              <p>マイページ</p>
            </Link>
          </div>
        </div>
      ) : (
        <Link to="/register">
          <button>登録・ログイン</button>
        </Link>
      )}
    </div>
  );
};
