
const form = document.getElementById("predictionForm");
const result = document.getElementById("result");

let recordCount = 0;

function getValue(id) {
  return document.getElementById(id).value.trim();
}

function getNumber(id) {
  return Number(getValue(id));
}

function getPerformance(score) {
  if (score >= 85) {
    return {
      grade: "Excellent",
      color: "#168a68",
      advice: "Great work! Continue consistent study habits, revise regularly, and challenge yourself with advanced learning activities."
    };
  }

  if (score >= 70) {
    return {
      grade: "Good",
      color: "#6254df",
      advice: "You are making good progress. Maintain attendance, practice previous exam questions, and review difficult topics."
    };
  }

  if (score >= 50) {
    return {
      grade: "Average",
      color: "#c27a19",
      advice: "Focus on improving assignment scores and revision habits. Create a study timetable and seek help with challenging subjects."
    };
  }

  return {
    grade: "Needs Improvement",
    color: "#d34e58",
    advice: "Consider a structured study plan, regular attendance, additional practice, and support from teachers to strengthen your fundamentals."
  };
}

function calculatePrediction(data) {
  // DEMONSTRATION ONLY — NOT A TRAINED ML MODEL.
  // Replace this formula with predictions from a trained model API.

  const studyScore = Math.min(data.studyHours / 8, 1) * 100;

  const participationScore = {
    1: 40,
    2: 70,
    3: 100
  }[data.participation];

  const score =
    data.previousMarks * 0.40 +
    data.assignmentMarks * 0.25 +
    data.attendance * 0.20 +
    studyScore * 0.10 +
    participationScore * 0.05;

  return Math.round(Math.max(0, Math.min(100, score)) * 10) / 10;
}

function getRecommendation(data, score) {
  const suggestions = [];

  if (data.attendance < 75) {
    suggestions.push("Improve attendance and attend classes regularly.");
  }

  if (data.previousMarks < 60) {
    suggestions.push("Revise previous topics and practice exam questions.");
  }

  if (data.assignmentMarks < 60) {
    suggestions.push("Complete assignments consistently and ask for feedback.");
  }

  if (data.studyHours < 2) {
    suggestions.push("Try building a regular daily study routine.");
  }

  if (data.participation === 1) {
    suggestions.push("Participate more actively in class discussions.");
  }

  if (suggestions.length === 0) {
    suggestions.push(
      "Maintain your current habits and continue reviewing topics regularly."
    );
  }

  const performance = getPerformance(score);
  return performance.advice + " " + suggestions.join(" ");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const data = {
    name: getValue("studentName"),
    id: getValue("studentId"),
    attendance: getNumber("attendance"),
    previousMarks: getNumber("previousMarks"),
    assignmentMarks: getNumber("assignmentMarks"),
    studyHours: getNumber("studyHours"),
    participation: getNumber("participation")
  };

  const score = calculatePrediction(data);
  const performance = getPerformance(score);

  document.getElementById("resultName").textContent = data.name;
  document.getElementById("resultId").textContent =
    "Student ID: " + data.id;

  document.getElementById("predictedScore").textContent =
    score.toFixed(1);

  document.getElementById("ringScore").textContent =
    score.toFixed(0) + "%";

  const gradeBadge = document.getElementById("gradeBadge");
  gradeBadge.textContent = performance.grade;
  gradeBadge.style.color = performance.color;
  gradeBadge.style.background = performance.color + "18";

  document.getElementById("scoreRing").style.background =
    `conic-gradient(${performance.color} ${score * 3.6}deg, #e8e6f8 ${score * 3.6}deg)`;

  document.getElementById("progressBar").style.width =
    score + "%";

  document.getElementById("recommendation").textContent =
    getRecommendation(data, score);

  result.hidden = false;

  recordCount += 1;
  document.getElementById("recordCount").textContent = recordCount;
  document.getElementById("lastScore").textContent =
    score.toFixed(1) + "%";
  document.getElementById("lastGrade").textContent =
    performance.grade;

  result.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

form.addEventListener("reset", function () {
  result.hidden = true;
});

// Start with an empty dashboard.
document.getElementById("recordCount").textContent = "0";
document.getElementById("lastScore").textContent = "--";
document.getElementById("lastGrade").textContent = "--";
