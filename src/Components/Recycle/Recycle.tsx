import React from "react";
import RecycleBanner from "./RecycleBanner";
import RecycleService from "./RecycleService";
import WasteType from "./WasteType";

const Recycle = () => {
  return (
    <div>
      <RecycleBanner />
      <WasteType />
      <RecycleService />
    </div>
  );
};

export default Recycle;
