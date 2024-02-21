import React, { useState, memo } from "react";
import "./Card.css";
import "../../App.css";
import { Space } from "../Space/Space";
import { Button } from "../Button/Button";

export const RequestCard = () => {
  return (
    <div className="card">
      <Space height={16} />
      <div>
        <img src="https://via.placeholder.com/320x180" alt="商品画像" />
        <h3>商品名</h3>
        <p>全21点</p>
      </div>
      <Space height={20} />
      <div className="card-content">
        <div>
          <label>配送依頼期限</label>
          <p>2023年10月31日（金）23:59</p>
        </div>
        <Space height={20} />
        <div>
          <label>発送予定時期</label>
          <p>2023年11月末</p>
        </div>
        <Space height={20} />
        <div>
          <label>送料</label>
          <p>440円（税込）</p>
        </div>
      </div>
      <Space height={20} />
      <div>
        <Button title="配送依頼へ進む" />
      </div>
      <Space height={20} />
    </div>
  );
};
