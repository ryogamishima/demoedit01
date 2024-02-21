import React, { memo } from "react";
import { Space } from "../Space/Space";
import {
  TwitterShareButton,
  LineShareButton,
  FacebookShareButton,
  TwitterIcon,
  LineIcon,
  FacebookIcon,
} from "react-share";
import "./Share.css";

interface IProps {
  url: string;
  text: string;
  hashtags?: string[];
}

export const Share = memo(({ url, text, hashtags }: IProps) => {
  return (
    <div>
      <h3>シェア</h3>
      <Space height={36} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TwitterShareButton url={url} title={text} hashtags={hashtags}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>
        <Space width={48} />
        <LineShareButton url={url} title={text}>
          <LineIcon size={48} round />
        </LineShareButton>
        <Space width={48} />
        <FacebookShareButton url={url} title={text}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
      </div>
    </div>
  );
});
