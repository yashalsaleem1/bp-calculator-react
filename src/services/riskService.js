export function getRiskLevel(category) {
  if (category === "High Blood Pressure") {
    return "High Risk";
  }

  if (category === "Pre-High Blood Pressure") {
    return "Elevated Risk";
  }

  if (category === "Ideal Blood Pressure") {
    return "Healthy";
  }

  return "Low Risk";
}
