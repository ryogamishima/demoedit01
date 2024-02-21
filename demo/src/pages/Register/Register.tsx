import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Register.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Border } from "../../components/Border/Border";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="whiteback-container">
        <div className="whiteback">
          <h2>新規登録</h2>
          <Input type="email" placeholder="メールアドレス" value={email} />
          <Space height={24} />
          <Input type="password" placeholder="パスワード" value={password} />
          <Space height={24} />
          <Link to="/personal">
            <Button
              title="メールアドレスで登録"
              backgroundColor="#ff4127"
              textColor="#fff"
              border=""
            />
          </Link>
          <Space height={48} />
          <Border />
          <Space height={48} />
          <p style={{ fontSize: "14px" }}>
            登録することで
            <Link
              to="https://avaren.co.jp/hoge-terms"
              style={{ color: "#15c0ed" }}
            >
              利用規約
            </Link>
            と
            <Link
              to="https://avaren.co.jp/hoge-privacy"
              style={{ color: "#15c0ed" }}
            >
              プライバシーポリシー
            </Link>
            に同意したとみなされます。
          </p>
          <Space height={48} />
          <Link to="/login" className="redlink">
            アカウントをお持ちの方はこちら
          </Link>
          <Space height={48} />
        </div>
      </div>
    </>
  );
};

export default Register;
