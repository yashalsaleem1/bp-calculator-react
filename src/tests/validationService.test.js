import { describe, it, expect } from "vitest";
import { validateBloodPressure } from "../services/validationService";

describe("validateBloodPressure", () => {
  //sys < 70
  it("returns an error when systolic is below 70", () => {
    expect(validateBloodPressure(60, 50)).toBe(
      "Systolic must be between 70 and 190",
    );
  });
  //sys > 190
  it("returns an error when systolic is above 190", () => {
    expect(validateBloodPressure(200, 80)).toBe(
      "Systolic must be between 70 and 190",
    );
  });
  //dia < 40
  it("returns an error when diastolic is below 40", () => {
    expect(validateBloodPressure(100, 30)).toBe(
      "Diastolic must be between 40 and 100",
    );
  });
  //dia > 100
  it("returns an error when diastolic is above 100", () => {
    expect(validateBloodPressure(100, 130)).toBe(
      "Diastolic must be between 40 and 100",
    );
  });
  //systolic <= diastolic
  it("returns an error when systolic is less than or equal to diastolic", () => {
    expect(validateBloodPressure(90, 90)).toBe(
      "Systolic must be greater than Diastolic",
    );
  });
  // Valid blood pressure values
  it("returns no error for valid blood pressure values", () => {
    expect(validateBloodPressure(120, 80)).toBe("");
  });
});
