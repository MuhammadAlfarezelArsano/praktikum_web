const questions = [
    { question: "1. Siapa pemimpin Turki Ottoman yang menaklukkan Konstantinopel pada 1453?", options: ["Salahuddin Al Ayyubi", "Al Mansur", "Muhammad Al Fatih", "Al Mustansir"], correct: 2 },
    { question: "2. Kota Konstantinopel sangat penting karena berada di antara dua benua. Selat apakah yang menjadi penghubungnya?", options: ["Selat Gibraltar", "Selat Bosporus", "Selat Malaka", "Selat Hormuz"], correct: 1 },
    { question: "3. Sultan Mehmed II berhasil mengatasi Rantai Besi Raksasa dengan cara?", options: ["Mengangkut kapal melewati daratan", "Menggunakan kapal selam", "Memotong rantai dengan penyelam", "Menggunakan sihir"], correct: 0 },
    { question: "4. Berapa lama pengepungan Konstantinopel berlangsung?", options: ["7 hari", "6 bulan", "53 hari", "1 tahun"], correct: 2 },
    { question: "5. Gereja apa yang diubah menjadi masjid setelah penaklukan Konstantinopel?", options: ["Katedral Notre-Dame", "Gereja Santo Petrus", "Basilika San Marco", "Hagia Sophia"], correct: 3 }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcome-screen").classList.add("d-none");
    document.getElementById("quiz-box").classList.remove("d-none");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.classList.add("d-none");

    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    progressText.textContent = `Soal ke ${currentQuestionIndex + 1} dari ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-dark m-1";
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsElement.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    if (selectedIndex === questions[currentQuestionIndex].correct) {
        feedbackElement.textContent = "✅ Jawaban Benar!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "❌ Jawaban Salah!";
        feedbackElement.style.color = "red";
    }

    nextButton.classList.remove("d-none");
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-box").classList.add("d-none");
    document.getElementById("result-screen").classList.remove("d-none");
    document.getElementById("score-text").textContent = `Skor Kamu: ${score}/${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").classList.add("d-none");
    document.getElementById("welcome-screen").classList.remove("d-none");
}
