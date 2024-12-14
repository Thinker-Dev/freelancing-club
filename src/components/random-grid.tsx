import React from "react";

const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-5 px-5">
      <div className="space-y-5">
        <div className="h-40 bg-gray-200"></div>
        <div className="h-56 bg-gray-200"></div>
        <div className="h-72 bg-gray-200"></div>
      </div>
      <div className="space-y-5">
        <div className="h-72 bg-gray-200"></div>
        <div className="h-60 bg-gray-200"></div>
        <div className="h-72 bg-gray-200"></div>
      </div>
      <div className="space-y-5">
        <div className="h-48 bg-gray-200"></div>
        <div className="h-52 bg-gray-200"></div>
        <div className="h-32 bg-gray-200"></div>
      </div>
      <div className="space-y-5">
        <div className="h-60 bg-gray-200"></div>
        <div className="h-56 bg-gray-200"></div>
        <div className="h-72 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default GalleryGrid;
