import { useState } from "react";
import "./TabsSection.css";

const TabsSection = ({ description, features, location, floorPlan, lat, lng }) => {
  const tabs = ["Description", "Features", "Location", "Floor Plan", "Map"];
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="tabs-section">
      {/* Tabs */}
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {/* Description Tab */}
        {activeTab === "Description" && <p>{description}</p>}

        {/* Features Tab */}
        {activeTab === "Features" && (
          <ul>
            {features && features.length > 0 ? (
              features.map((feat, i) => <li key={i}>{feat}</li>)
            ) : (
              <li>No additional features listed.</li>
            )}
          </ul>
        )}

        {/* Location Tab */}
        {activeTab === "Location" && <p>{location}</p>}

        {/* Floor Plan Tab */}
        {activeTab === "Floor Plan" && (
          floorPlan ? (
            <img src={floorPlan} alt="Floor plan" className="floor-plan-image" />
          ) : (
            <p>Floor plan not available.</p>
          )
        )}

        {/* Map Tab */}
        {activeTab === "Map" && (
          (lat && lng) ? (
            <iframe
              title="Property location map"
              src={`https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`}
              className="map-frame"
              loading="lazy"
            ></iframe>
          ) : (
            <p>Map location not available.</p>
          )
        )}
      </div>
    </div>
  );
};

export default TabsSection;
