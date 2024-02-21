import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Viewer.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Border } from "../../components/Border/Border";

const Viewer = () => {
  return (
    <div>
      <Space height={16} />
      <p>ビューアです</p>
      <Space height={48} />
      <Link to="/collection">
        <Button
          title="コレクション一覧へ"
          backgroundColor="#c9e900"
          textColor="#000"
        />
      </Link>
      <Space height={48} />
      <Border />
      <Space height={48} />
    </div>
  );
};

export default Viewer;
