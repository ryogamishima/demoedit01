import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Reset.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      setEmailError("無効なメールアドレス形式です。");
    } else {
      setEmailError("");
    }
  };

  const isFormValid = !emailError && email;
  return (
    <>
      <div className="whiteback-container">
        <div className="whiteback">
          <h2>パスワード変更</h2>
          <Input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
          />
          <Space height={48} />
          <Link to={isFormValid ? "/login" : "#"}>
            <Button
              title="リセット用メールを送る"
              backgroundColor={isFormValid ? "#ff4127" : "#f0f0f0"}
              textColor={isFormValid ? "#fff" : "#757373"}
              border={isFormValid ? "" : "none"}
              onClick={isFormValid ? undefined : (e) => e.preventDefault()}
            />
          </Link>
          <Space height={48} />
          <Link to="/login" className="redlink">
            戻る
          </Link>
          <Space height={48} />
        </div>
      </div>
    </>
  );
};

export default Reset;
