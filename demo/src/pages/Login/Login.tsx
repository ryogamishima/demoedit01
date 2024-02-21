import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Login.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="whiteback-container">
        <div className="whiteback">
          <h2>ログイン</h2>
          <Input type="email" placeholder="メールアドレス" value={email} />
          <Space height={24} />
          <Input type="password" placeholder="パスワード" value={password} />
          <Space height={24} />
          <Link to="/">
            <Button
              title="メールアドレスでログイン"
              backgroundColor="#ff4127"
              textColor="#fff"
              border=""
            />
          </Link>
          <Space height={24} />
          <Link
            to="/reset"
            style={{
              color: "#15c0ed",
              borderBottom: "1px solid #15c0ed",
              fontSize: "14px",
            }}
          >
            パスワードを変更する
          </Link>
          <Space height={48} />
          <Link to="/register" className="redlink">
            アカウントをお持ちでない方はこちら
          </Link>
          <Space height={48} />
        </div>
      </div>
    </>
  );
};

export default Login;
