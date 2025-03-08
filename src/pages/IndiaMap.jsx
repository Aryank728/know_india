import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IndiaMap from "react-svgmap-india";
import "./IndiaMap.css"; // We'll create this CSS file

const IndiaMapComponent = () => {
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();

  const states = {
    'AN': 'Andaman and Nicobar Islands',
    'AP': 'Andhra Pradesh',
    'AR': 'Arunachal Pradesh',
    'AS': 'Assam',
    'BR': 'Bihar',
    'CH': 'Chandigarh',
    'CT': 'Chhattisgarh',
    'DD': 'Dadra and Nagar Haveli',
    'DL': 'Delhi',
    'DN': 'Daman and Diu',
    'GA': 'Goa',
    'GJ': 'Gujarat',
    'HP': 'Himachal Pradesh',
    'HR': 'Haryana',
    'JH': 'Jharkhand',
    'JK': 'Jammu and Kashmir',
    'KA': 'Karnataka',
    'KL': 'Kerala',
    'LA': 'Ladakh',
    'LD': 'Lakshadweep',
    'MH': 'Maharashtra',
    'ML': 'Meghalaya',
    'MN': 'Manipur',
    'MP': 'Madhya Pradesh',
    'MZ': 'Mizoram',
    'NL': 'Nagaland',
    'OR': 'Odisha',
    'PB': 'Punjab',
    'PY': 'Puducherry',
    'RJ': 'Rajasthan',
    'SK': 'Sikkim',
    'TG': 'Telangana',
    'TN': 'Tamil Nadu',
    'TR': 'Tripura',
    'UP': 'Uttar Pradesh',
    'UT': 'Uttarakhand',
    'WB': 'West Bengal'
  };

  const handleClick = (stateCode) => {
    const stateName = states[stateCode] || stateCode;
    setSelectedState(stateName);

    const stateUrl = stateName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/places/${stateUrl}`);
  };

  return (
    <div className="py-8 px-4 mb-16 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto p-6 mb-20">
        {selectedState && (
          <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-200 text-center">
            <h3 className="text-xl font-semibold">{selectedState}</h3>
          </div>
        )}
        
        <div className="flex justify-end mt-10 -mr-96 items-center">
          <IndiaMap
            onClick={handleClick}
            size="600px"  // Reduced size
            mapColor="transparent"
            strokeColor="#333333"
            strokeWidth="0.5"
            className="colorful-india-map"
          />
        </div>
      </div>
    </div>
  );
};

export default IndiaMapComponent;
