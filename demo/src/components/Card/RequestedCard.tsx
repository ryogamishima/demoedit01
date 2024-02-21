import React from "react";
import "./Card.css";
import "../../App.css";
import { Space } from "../Space/Space";

export const RequestedCard = () => {
  return (
    <div className="card">
      <Space height={16} />
      <div>
        <img src="https://via.placeholder.com/320x180" alt="商品画像" />
        <h3>商品名</h3>
        <p>全21点</p>
      </div>
      <Space height={16} />
      <div className="card-content">
        <div>
          <label>発送予定時期</label>
          <p>2023年11月末</p>
        </div>
        <Space height={16} />
        <div>
          <label>配送先</label>
          <div>
            <p>桐原徹真</p>
            <p>キリハラテッシン</p>
            <p>09064781106</p>
          </div>
          <Space height={8} />
          <div>
            <p>〒3360931</p>
            <p>埼玉県</p>
            <p>さいたま市緑区原山</p>
            <p>2-12-7</p>
            <p>桐原ビル301号室</p>
          </div>
        </div>
      </div>
      <Space height={16} />
    </div>
  );
};
