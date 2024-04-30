import { useState } from "react";

export function useCarService(data) {
  const [expandedMarca, setExpandedMarca] = useState(null);

  const toggleMarca = (marca) => {
    setExpandedMarca((prevMarca) => (prevMarca === marca ? null : marca));
  };

  return {
    expandedMarca,
    toggleMarca,
    data,
  };
}
