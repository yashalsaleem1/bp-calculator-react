import { describe, it, expect } from "vitest";
import { calculateCategory } from "../services/bloodPressureService";

describe("calculateCategory", () => {
  it("returns High Blood Pressure", () => {
    expect(calculateCategory(150, 95)).toBe("High Blood Pressure");
  });
  it("returns Pre-High Blood Pressure", () => {
    expect(calculateCategory(125, 75)).toBe("Pre-High Blood Pressure");
  });
  it("returns Ideal Blood Pressure", () => {
    expect(calculateCategory(110, 70)).toBe("Ideal Blood Pressure");
  });
  it("returns Low Blood Pressure", () => {
    expect(calculateCategory(85, 55)).toBe("Low Blood Pressure");
  });
});
