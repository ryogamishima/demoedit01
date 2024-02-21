import React from "react";

interface IProps {
  height?: number;
  width?: number;
}

export const Space = (props: IProps) => {
  const { width, height } = props;
  return <div style={{ width, height }} />;
};
