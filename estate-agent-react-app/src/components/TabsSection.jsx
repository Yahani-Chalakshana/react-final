import { useState } from "react";
import "./TabsSection.css";

const TabsSection = ({ description, features, location, floorPlan, lat, lng }) => {
  const tabs = ["Description", "Features", "Location", "Floor Plan", "Map"]; // list of tabs
  const [activeTab, setActiveTab] = useState("Description"); // track currently active tab

  return (
    <div className="tabs-section">
      {/* Tabs */}
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`} // add 'active' class if selected
            onClick={() => setActiveTab(tab)} // switch active tab on click
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
              features.map((feat, i) => <li key={i}>{feat}</li>) // list each feature
            ) : (
              <li>No additional features listed.</li> // fallback text
            )}
          </ul>
        )}

        {/* Location Tab */}
        {activeTab === "Location" && <p>{location}</p>}

        {/* Floor Plan Tab */}
        {activeTab === "Floor Plan" && ( // floor plan content
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
              title="Property location map" // accessibility
              src={`https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`} // embed map
              className="map-frame"
              loading="lazy" // lazy load for performance
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