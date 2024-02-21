import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Border } from "../../components/Border/Border";

const Complete = () => {
  return (
    <div className="whiteback">
      ＜<h2>配送依頼</h2>
      <p style={{ color: "#f82e42", fontSize: "24px" }}>
        配送依頼が完了しました！
      </p>
      <div>
        <Space height={32} />
        <img
          src="https://via.placeholder.com/320x180"
          alt="商品画像"
          width="100%"
        />
        <Space height={32} />
        <h3>商品名</h3>
        <p>全21点</p>
      </div>
      <Space height={32} />
      <Border />
      <Space height={32} />
      <div>
        <label>発送予定時期</label>
        <p>2023年9月末</p>
      </div>
      <Space height={44} />
      <p>
        発送されたら0301ktesshin@gmail.comに
        <br />
        メールが届きます。
      </p>
      <Space height={44} />
      <div>
        <Link to="/">
          <Button
            title="Topページへ"
            backgroundColor="#c9e900"
            textColor="#000"
          />
        </Link>
      </div>
      <Space height={44} />
    </div>
  );
};

export default Complete;
