import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Product.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Share } from "../../components/Share/Share";

const Product = () => {
  //ログイン状態管理
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Space height={16} />
      <img
        src="https://via.placeholder.com/320x180"
        alt="商品紹介画像"
        width="100%"
      />
      <Space height={8} />
      <h1>商品名</h1>
      <Space height={16} />
      <div className="fixed-bottom">
        {isLogin ? (
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Link to="/result?count=1" style={{ flex: 1, marginRight: 4 }}>
              <Button title="くじを1回引く" />
            </Link>
            <Link to="/result?count=10" style={{ flex: 1, marginLeft: 4 }}>
              <Button title="くじを10回引く" />
            </Link>
          </div>
        ) : (
          <Link to="/register" style={{ flex: 1 }}>
            <Button title="登録・ログインしてくじを引く" />
          </Link>
        )}
      </div>
      <Space height={32} />
      <Share
        url="https://hoge.com"
        text="hogehoge"
        hashtags={["hoge", "fuga"]}
      />
      <Space height={48} />
    </>
  );
};

export default Product;
