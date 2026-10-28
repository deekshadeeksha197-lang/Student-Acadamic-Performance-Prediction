
# Student Academic Performance Prediction System

## Project Overview

The Student Academic Performance Prediction System is a
web-based academic project designed to demonstrate how student
information can be used to estimate academic performance.

The system accepts student details such as attendance,
previous exam marks, assignment marks, study hours, and
class participation. It displays an estimated score,
performance category, and suggestions for improvement.

The current version uses HTML, CSS, and JavaScript with a
sample weighted-score formula. It does not yet use a trained
machine learning model.

## Objectives

- Estimate student academic performance.
- Present student information through a simple dashboard.
- Identify academic indicators that may need improvement.
- Provide recommendations based on entered information.
- Create a foundation for integrating machine learning.

## Technologies Used

- HTML5: website structure and input form.
- CSS3: styling and responsive layout.
- JavaScript: input validation, score calculation, and results.
- Python and Flask: optional backend for a future ML model.
- Scikit-learn: optional machine learning library.

## Project Structure

student-performance-prediction/
|
|-- index.html
|-- style.css
|-- script.js
|-- README.md

## Features

1. Student information form.
2. Attendance and marks input.
3. Academic score estimation.
4. Performance category display.
5. Personalized improvement suggestions.
6. Dashboard statistics for the current session.
7. Responsive design for mobile and desktop.

## How to Run

1. Download or clone this project.
2. Keep all four files in the same folder.
3. Open index.html in a modern web browser.
4. Enter the student details.
5. Click Predict Performance.
6. View the estimated score and suggestions.

No server is required for the frontend demonstration.

## Demonstration Scoring Formula

The current example uses:

Estimated Score =
    Previous Exam Marks * 0.40
  + Assignment Marks * 0.25
  + Attendance * 0.20
  + Study Score * 0.10
  + Participation Score * 0.05

Study Score is calculated from study hours per day,
scaled to a maximum of 100.

Participation is assigned an illustrative score:
Low = 40, Medium = 70, High = 100.

These weights are examples only and are not scientifically
validated or learned from a dataset.

## Future Machine Learning Integration

A future version can:

1. Collect an appropriate, authorized academic dataset.
2. Clean missing values and prepare the input features.
3. Select a target variable, such as final exam marks.
4. Split data into training and testing sets.
5. Train and evaluate a regression model, such as
   Linear Regression or Random Forest Regressor.
6. Build an API using Python and Flask.
7. Connect the website to the API using JavaScript fetch().
8. Evaluate errors and validate model performance on
   held-out data.

If the target is a performance category instead of a
numeric score, a classification model may be more suitable.

## Limitations

- The current prediction is a demonstration formula.
- No trained ML model or dataset is included.
- Dashboard statistics are not saved after refreshing.
- Results should not be used to make high-stakes decisions
  about students.

## Privacy and Responsible Use

Use authorized data, protect student information, and
avoid exposing personally identifiable information.
Predictions should support students rather than label
or unfairly penalize them.

## Author

Student Project

## License

This project is intended for educational use.
