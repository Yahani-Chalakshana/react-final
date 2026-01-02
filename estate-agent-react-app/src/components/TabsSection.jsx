import React, { useState } from "react";

const TabsSection = ({ description, features, location }) => {
  const tabs = ["Description", "Features", "Location"];
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              border: "none",
              borderBottom: activeTab === tab ? "3px solid #007BFF" : "none",
              backgroundColor: "transparent",
              fontWeight: activeTab === tab ? "bold" : "normal",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "15px", border: "1px solid #ccc", borderTop: "none" }}>
        {activeTab === "Description" && <p>{description}</p>}
        {activeTab === "Features" && (
          <ul>
            {features && features.length > 0 ? (
              features.map((feat, i) => <li key={i}>{feat}</li>)
            ) : (
              <li>No additional features listed.</li>
            )}
          </ul>
        )}
        {activeTab === "Location" && <p>{location}</p>}
      </div>
    </div>
  );
};

export default TabsSection;
