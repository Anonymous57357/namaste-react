import { useState, useEffect } from "react";

import { SWIGGY_URL } from "./constants";
const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL + "/restaurants/" + resId);
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.log(`something error occured ${error.message}`);
    }
  };

  return resInfo;
};

export default useRestaurentMenu;
