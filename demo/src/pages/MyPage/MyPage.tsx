import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./MyPage.css";
import { Space } from "../../components/Space/Space";
import { Border } from "../../components/Border/Border";

const MyPage = () => {
  return (
    <>
      <div className="whiteback-container">
        <div className="whiteback">
          <h2>マイページ</h2>
          <div className="modal-content">
            <label>性別</label>
            <p>男</p>
          </div>
          <Space height={24} />
          <div className="modal-content">
            <label>生年月日</label>
            <p>2001/03/01</p>
          </div>
          <Space height={48} />
          <Border />
          <Space height={48} />
          <div className="modal-content">
            <label>メールアドレス</label>
            <p>0301ktesshin@gmail.com</p>
          </div>
          <Space height={48} />
          <Link to="/" className="redlink">
            ログアウト
          </Link>
          <Space height={48} />
        </div>
      </div>
    </>
  );
};

export default MyPage;
