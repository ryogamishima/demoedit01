import React, { memo } from "react";
import "./Button.css";

interface IProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  border?: string;
}

export const Button = memo(
  ({
    onClick,
    title,
    backgroundColor = "#ff4127",
    textColor = "#fff",
    width = "100%",
    border,
  }: IProps) => {
    return (
      <button
        className="base-button"
        onClick={onClick}
        style={{ backgroundColor, color: textColor, width, border }}
      >
        {title}
      </button>
    );
  }
);
