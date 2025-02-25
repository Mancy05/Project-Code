const checkbox = document.getElementById("agree");
const startButton = document.getElementById("startExam");

checkbox.addEventListener("change", function() {
    startButton.disabled = !this.checked;
});

function startExam() {
    alert("Exam Started!");
    window.location.href = "exam.html"; // Change this to your actual exam page
}
