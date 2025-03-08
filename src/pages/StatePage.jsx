import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const StatePage = () => {
  const { stateName } = useParams();
  
  useEffect(() => {
    console.log("State name from URL:", stateName);
  }, [stateName]);
  
  // Format state name: replace hyphens with spaces and capitalize each word
  const formattedStateName = stateName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to {formattedStateName}</h1>
      <p>More information about {formattedStateName} coming soon!</p>
    </div>
  );
};

export default StatePage;
