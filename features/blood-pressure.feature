Feature: Blood Pressure Categories

Scenario: High Blood Pressure
Given systolic pressure is 150
And diastolic pressure is 95
When the reading is submitted
Then High Blood Pressure should be displayed
    
Scenario: Pre-High Blood Pressure
Given systolic pressure is 125
And diastolic pressure is 75
When the reading is submitted
Then Pre-High Blood Pressure should be displayed

Scenario: Ideal Blood Pressure
Given systolic pressure is 110
And diastolic pressure is 70
When the reading is submitted
Then Ideal Blood Pressure should be displayed

Scenario: Low Blood Pressure
Given systolic pressure is 85
And diastolic pressure is 55
When the reading is submitted
Then Low Blood Pressure should be displayed

Scenario: Systolic value below minimum
Given systolic pressure is 60
And diastolic pressure is 50
When the reading is validated
Then the error message "Systolic must be between 70 and 190" should be displayed