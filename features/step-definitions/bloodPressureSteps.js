import { Given, When, Then } from "@cucumber/cucumber";
import { calculateCategory } from "../../src/services/bloodPressureService.js";
import { validateBloodPressure } from "../../src/services/validationService.js";
import assert from "assert";

let systolic;
let diastolic;
let result;
let error;

Given("systolic pressure is {int}", function (value) {
  systolic = value;
});

Given("diastolic pressure is {int}", function (value) {
  diastolic = value;
});

When("the reading is submitted", function () {
  result = calculateCategory(systolic, diastolic);
});

When("the reading is validated", function () {
  error = validateBloodPressure(systolic, diastolic);
});

Then("High Blood Pressure should be displayed", function () {
  assert.strictEqual(result, "High Blood Pressure");
});

Then("Pre-High Blood Pressure should be displayed", function () {
  assert.strictEqual(result, "Pre-High Blood Pressure");
});

Then("Normal Blood Pressure should be displayed", function () {
  assert.strictEqual(result, "Normal Blood Pressure");
});

Then("Low Blood Pressure should be displayed", function () {
  assert.strictEqual(result, "Low Blood Pressure");
});

Then("Ideal Blood Pressure should be displayed", function () {
  assert.strictEqual(result, "Ideal Blood Pressure");
});

Then(
  "the error message {string} should be displayed",
  function (expectedError) {
    assert.strictEqual(error, expectedError);
  },
);
