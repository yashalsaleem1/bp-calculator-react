export function validateBloodPressure(systolic, diastolic) {
  const sys = Number(systolic);
  const dia = Number(diastolic);

  if (sys < 70 || sys > 190) {
    return "Systolic must be between 70 and 190";
  }

  if (dia < 40 || dia > 100) {
    return "Diastolic must be between 40 and 100";
  }

  if (sys <= dia) {
    return "Systolic must be greater than Diastolic";
  }

  return "";
}
