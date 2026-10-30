export function calculateCategory(systolic, diastolic) {
  const sys = Number(systolic);
  const dia = Number(diastolic);

  if (sys >= 140 || dia >= 90) {
    return "High Blood Pressure";
  }

  if (sys >= 120 || dia >= 80) {
    return "Pre-High Blood Pressure";
  }

  if (sys >= 90 && dia >= 60) {
    return "Ideal Blood Pressure";
  }

  return "Low Blood Pressure";
}
