export default function fetchCarsByBrand(data, brand) {
  const carsByBrand = data.filter((car) => car.brand === brand);
  return carsByBrand.sort((a, b) => a.model.localeCompare(b.model));
}
