# Student Result Dashboard

## Project Overview
The Student Result Dashboard is a simple web-based project that manages student information, course scores, individual course results, and an overall result summary using HTML, CSS, and JavaScript.

Student information, course data, scores, and result calculations are defined in `script.js` and displayed in the browser console.

## Technologies Used
- HTML5 – Provides the webpage structure.
- CSS3 – Styles the dashboard.
- JavaScript – Stores student and course data, calculates results, and displays the information in the browser console.

## Project Structure

```text
student-result-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features

### 1. Student Information
The JavaScript file stores:
- Student name
- Student ID
- Programme of study

### 2. Course Results
The project includes three courses:
- Web Development
- JavaScript
- Responsive Design

Each course contains a score and an automatically calculated result.

### 3. Pass or Fail Calculation
The pass mark is set to 50.

- A score of 50 or above results in PASS.
- A score below 50 results in FAIL.

### 4. Result Summary
The script automatically calculates:
- Total number of courses
- Average score
- Overall result

The overall result is PASS when all courses are passed. Otherwise, it is FAIL.

### 5. Browser Console Output
The student information, course results, and summary are displayed in the browser's developer console using `console.log()` and `console.table()`.

## How to Run the Project

1. Create a project folder named `student-result-dashboard`.
2. Save your HTML code as `index.html`.
3. Save your stylesheet as `style.css`.
4. Save the JavaScript code as `script.js`.
5. Ensure the HTML file includes the following script reference before the closing `body` tag:

   ```html
   <script src="script.js"></script>
   ```

6. Open `index.html` in a web browser.
7. Press `F12` or right-click the page and select **Inspect**.
8. Select the **Console** tab to view the student information, course results, and result summary.

## Customization

To update the student information, edit the `student` object in `script.js`.

To change course names or scores, edit the `courses` array.

To change the minimum passing score, update the `passMark` variable.

The average score and overall result will be recalculated automatically when the page loads.

## Important Note
The current implementation displays the data in the browser console only. It does not automatically populate the visible dashboard.

JavaScript data is accessible to users through browser developer tools, so this approach should not be used to protect confidential student records.

## Author
Student Project

## License
This project is intended for educational and learning purposes.
