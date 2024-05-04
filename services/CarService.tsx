import { useState, useEffect } from "react";

interface Car {
  brand: string;
  model: string;
}

interface GroupedDataItem {
  brand: string;
  cars: Car[];
}

export function useCarService(data: Car[]) {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  const [groupedData, setGroupedData] = useState<GroupedDataItem[]>([]);

  useEffect(() => {
    const grouped = data
      .reduce((acc: GroupedDataItem[], curr: Car) => {
        const existingBrandIndex = acc.findIndex(
          (item) => item.brand === curr.brand
        );
        if (existingBrandIndex !== -1) {
          acc[existingBrandIndex].cars.push(curr);
        } else {
          acc.push({ brand: curr.brand, cars: [curr] });
        }
        return acc;
      }, [])
      .sort((a, b) => a.brand.localeCompare(b.brand));

    setGroupedData(grouped);
  }, [data]);

  const toggleBrand = (brand: string) => {
    setExpandedBrand((prevBrand) => (prevBrand === brand ? null : brand));
  };

  return {
    expandedBrand,
    toggleBrand,
    groupedData,
  };
}
