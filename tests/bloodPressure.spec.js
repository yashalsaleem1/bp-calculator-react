import { test, expect } from "@playwright/test";

test("high blood pressure reading", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator("input").nth(0).fill("150");

  await page.locator("input").nth(1).fill("95");

  await page.getByRole("button", { name: "Submit" }).click();

  await expect(
    page.locator("p").filter({ hasText: "High Blood Pressure" }).first(),
  ).toBeVisible();

  await expect(
    page.locator("p").filter({ hasText: "High Risk" }).first(),
  ).toBeVisible();
});
