/**
 * Quiz Logic
 * Handles selection, question rendering, and scoring.
 */

// State
let currentSubject = null;
let currentLevel = null;
let currentQuestions = [];
let currentQIndex = 0;
let score = 0;

// Elements
const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const levelSelectionDiv = document.getElementById('level-selection');
const btnStart = document.getElementById('btn-start');

// Initialize Selection Logic
document.querySelectorAll('.subject-select').forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset styles
        document.querySelectorAll('.subject-select').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentSubject = btn.dataset.val;
        levelSelectionDiv.style.display = 'block';
        checkReady();
    });
});

document.querySelectorAll('.level-select').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.level-select').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentLevel = btn.dataset.val;
        checkReady();
    });
});

function checkReady() {
    if (currentSubject && currentLevel) {
        btnStart.style.display = 'inline-block';
    }
}

btnStart.addEventListener('click', startQuiz);

function startQuiz() {
    // Load questions from data
    if (!QUIZ_DATA[currentSubject] || !QUIZ_DATA[currentSubject][currentLevel]) {
        alert("Data soal belum tersedia.");
        return;
    }

    currentQuestions = [...QUIZ_DATA[currentSubject][currentLevel]]; // Copy array
    // Shuffle questions slightly? Maybe later.

    currentQIndex = 0;
    score = 0;

    switchScreen(setupScreen, quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const qData = currentQuestions[currentQIndex];
    document.getElementById('q-progress').textContent = `Pertanyaan ${currentQIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('q-text').textContent = qData.q;

    const optsDiv = document.getElementById('options-container');
    optsDiv.innerHTML = '';

    qData.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optText;
        btn.onclick = () => handleAnswer(idx, qData.a, btn);
        optsDiv.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, btnElement) {
    // Disable all buttons
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score++;
        playQuizSound(true);
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct one
        allBtns[correctIndex].classList.add('correct');
        playQuizSound(false);
    }

    // Wait and go to next
    setTimeout(() => {
        currentQIndex++;
        if (currentQIndex < currentQuestions.length) {
            renderQuestion();
        } else {
            finishQuiz();
        }
    }, 1500);
}

// Sound Effect Helper (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playQuizSound(isCorrect) {
    // Ensure context is active (browsers suspend it by default until interaction)
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (isCorrect) {
        // Correct: High pitched 'Ding' (Sine wave)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.1); // C6

        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
    } else {
        // Wrong: Low pitched 'Buzz' (Sawtooth wave)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.3);

        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    }
}

function finishQuiz() {
    switchScreen(quizScreen, resultScreen);

    const percentage = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('final-score').textContent = percentage;

    let msg = "";
    if (percentage === 100) msg = "Makhallah! Sempurna! 🌟";
    else if (percentage >= 80) msg = "Luar biasa! Mumtaz! 👍";
    else if (percentage >= 60) msg = "Bagus, terus tingkatkan! 💪";
    else msg = "Jangan menyerah, ayo belajar lagi! 📚";

    document.getElementById('final-msg').textContent = msg;
}

function switchScreen(from, to) {
    from.classList.remove('active-screen');
    setTimeout(() => {
        from.style.display = 'none';
        to.style.display = 'block';
        requestAnimationFrame(() => to.classList.add('active-screen'));
    }, 100); // Tiny delay for animation
}
