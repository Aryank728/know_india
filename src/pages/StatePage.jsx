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
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-3xl font-bold">{`Welcome to ${formattedStateName}`}</h1>
      <p className="text-lg text-gray-600 mt-2">
        More information about {formattedStateName} coming soon!
      </p>
    </div>
  );
};

export default StatePage;
