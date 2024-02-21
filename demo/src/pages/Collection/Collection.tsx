import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Collection.css";
import { Space } from "../../components/Space/Space";
import { Share } from "../../components/Share/Share";

const Collection = () => {
  // 仮の画像データ
  const images = Array(21).fill("https://via.placeholder.com/320x180");

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
        <h2 className="title-h2">コレクション</h2>
      </div>
      <Space height={24} />
      <div className="gengas row-2">
        {images.map((image, index) => (
          <div key={index}>
            <Link to="/viewer">
              <img
                src={image}
                alt={`商品画像${index + 1}`}
                className="cover-genga"
              />
            </Link>
            <Space height={16} />
            <p>第1話 c_123</p>
          </div>
        ))}
      </div>
      <Space height={48} />
      <Share url="https://hoge.com/" text="hoge" hashtags={["hoge"]} />
      <Space height={48} />
    </>
  );
};

export default Collection;
