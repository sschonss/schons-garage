import { useState, useEffect } from "react";

export function useCarService(data) {
  const [expandedBrand, setExpandedBrand] = useState(null);
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    const grouped = data.reduce((acc, curr) => {
      const existingBrand = acc.find((item) => item.brand === curr.brand);
      if (existingBrand) {
        existingBrand.cars.push(curr);
      } else {
        acc.push({ brand: curr.brand, cars: [curr] });
      }
      return acc.sort((a, b) => a.brand.localeCompare(b.brand));
    }, []);
    setGroupedData(grouped);
  }, [data]);

  const toggleBrand = (brand) => {
    setExpandedBrand((prevBrand) => (prevBrand === brand ? null : brand));
  };

  return {
    expandedBrand,
    toggleBrand,
    groupedData,
  };
}
