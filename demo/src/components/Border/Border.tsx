import React, { memo } from "react";

interface IProps {
  color?: string;
  width?: string | number;
  borderWidth?: string | number;
}

export const Border = memo(
  ({ color = "#000", width = "100%", borderWidth = "0.6px" }: IProps) => {
    const style = {
      borderColor: color,
      width,
      borderWidth,
      borderStyle: "solid",
      margin: 0,
    };

    return <hr style={style} />;
  }
);
