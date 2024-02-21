import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import "./Result.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Share } from "../../components/Share/Share";
import { Border } from "../../components/Border/Border";

const Result = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const count = parseInt(params.get("count") || "1");

  //くじの回数ごとにclassName変更
  const getCountClassName = (count: number) => {
    if (count === 1) {
      return "gengas row-1";
    } else if (count === 10) {
      return "gengas row-2";
    } else {
      return "";
    }
  };

  return (
    <>
      <Space height={24} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="title-h2">くじ結果</h2>
      </div>
      <Space height={24} />
      <div className={getCountClassName(count)}>
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <img
                src="https://via.placeholder.com/320x180"
                alt="原画画像"
                className="cover-genga"
              />
              <Space height={16} />
              <p>第1話 c_123</p>
            </div>
          ))}
      </div>
      <Space height={40} />
      <Link to="/">
        <Button title="もう1度引く" />
      </Link>
      <Space height={16} />
      <Button
        title="結果画像を保存"
        backgroundColor="#15c0ec"
        textColor="#000"
      />
      <Space height={40} />
      <Border />
      <Space height={40} />
      <Link to="/collection">
        <Button
          title="コレクション一覧へ"
          backgroundColor="#c9e900"
          textColor="#000"
        />
      </Link>
      <Space height={48} />
      <Share url="https://hoge.com/" text="hoge" hashtags={["hoge", "fuga"]} />
      <Space height={48} />
    </>
  );
};

export default Result;
