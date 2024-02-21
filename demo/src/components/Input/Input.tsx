import React, { memo } from "react";
import "./Input.css";

interface IProps {
  type?: string;
  width?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  readOnly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string; // エラーメッセージ
}

export const Input = memo(
  ({
    type = "text",
    width,
    placeholder,
    value,
    name,
    readOnly,
    disabled,
    maxLength,
    minLength,
    onChange,
    errorMessage,
  }: IProps) => {
    // バリデーションの失敗状態を確認
    const isValidationError = errorMessage && value;

    return (
      <div>
        <div style={{ display: "flex" }}>
          <input
            className="input"
            type={type}
            style={{ width }}
            placeholder={placeholder}
            value={value}
            name={name}
            readOnly={readOnly}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            onChange={onChange}
          />
        </div>
        {isValidationError && (
          <p
            style={{
              color: "#f82e42",
              fontSize: "14px",
            }}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
