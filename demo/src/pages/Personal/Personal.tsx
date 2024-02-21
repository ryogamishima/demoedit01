import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Personal.css";
import { Space } from "../../components/Space/Space";
import { Button } from "../../components/Button/Button";

const Personal = () => {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const [gender, setGender] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleRegisterClick = (e: React.MouseEvent) => {
    if (!gender) {
      setValidationError("性別・生年月日を選択してください。");
      return;
    }
    // 登録処理をここに記述
  };

  return (
    <>
      <div className="whiteback-container">
        <div className="whiteback">
          <h2>アカウント設定</h2>
          <div className="text-left">
            <label htmlFor="email">メールアドレス</label>
            <Space height={8} />
            <p>sample@mail.com</p>
          </div>
          <Space height={48} />
          <div>
            <div className="text-left">
              <label>性別</label>
            </div>
            <Space height={8} />
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="男性"
                  onChange={() => setGender("男性")}
                />{" "}
                男性
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="女性"
                  onChange={() => setGender("女性")}
                />{" "}
                女性
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="その他"
                  onChange={() => setGender("その他")}
                />{" "}
                その他
              </label>
            </div>
          </div>
          <Space height={48} />
          <div>
            <div className="text-left">
              <label htmlFor="year">生年月日</label>
            </div>
            <Space height={8} />
            <div>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
              >
                {Array.from({ length: 124 }, (_, i) => (
                  <option key={i} value={1900 + i}>
                    {1900 + i}年
                  </option>
                ))}
              </select>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}月
                  </option>
                ))}
              </select>
              <select
                id="day"
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
              >
                {Array.from({ length: getDaysInMonth(month, year) }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}日
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            style={{ fontSize: "14px", color: "#ff4127", marginTop: "12px" }}
          >
            {validationError}
          </div>
          <Space height={48} />
          <div onClick={handleRegisterClick}>
            <Link to={gender ? "/" : "#"}>
              <Button
                title="登録完了する"
                backgroundColor={gender ? "#ff4127" : "#f0f0f0"}
                textColor={gender ? "#fff" : "#757373"}
                border={gender ? "" : "none"}
              />
            </Link>
          </div>
          <Space height={48} />
        </div>
      </div>
    </>
  );
};

export default Personal;
