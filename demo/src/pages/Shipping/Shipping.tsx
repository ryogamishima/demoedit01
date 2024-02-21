import React, { useState } from "react";
import "./Shipping.css";
import { RequestCard } from "../../components/Card/RequestCard";
import { RequestedCard } from "../../components/Card/RequestedCard";
import { ShippedCard } from "../../components/Card/ShippedCard";
import { Space } from "../../components/Space/Space";

const Shipping = () => {
  const [activeTab, setActiveTab] = useState("request");

  const renderContent = () => {
    switch (activeTab) {
      case "request":
        return (
          <div>
            <RequestCard />
          </div>
        );
      case "requested":
        return (
          <div>
            <RequestedCard />
          </div>
        );
      case "shipped":
        return (
          <div>
            <ShippedCard />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Space height={24} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="title-h2">配送管理</h2>
      </div>
      <Space height={24} />
      <div className="content">
        <div
          className={`tab ${activeTab === "request" ? "active" : ""}`}
          onClick={() => setActiveTab("request")}
        >
          配送依頼可能
        </div>
        <div
          className={`tab ${activeTab === "requested" ? "active" : ""}`}
          onClick={() => setActiveTab("requested")}
        >
          配送依頼済み
        </div>
        <div
          className={`tab ${activeTab === "shipped" ? "active" : ""}`}
          onClick={() => setActiveTab("shipped")}
        >
          発送済み
        </div>
      </div>
      <div className="tab-content">{renderContent()}</div>
      <Space height={16} />
    </div>
  );
};

export default Shipping;
