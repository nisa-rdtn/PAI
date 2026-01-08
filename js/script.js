/**
 * Madrasah Online - Main Script
 * Handles audio playback using Web Speech API (Text-to-Speech).
 * This ensures users hear Arabic pronunciation without needing external MP3 files.
 */

// Store voices variable
let availableVoices = [];

document.addEventListener('DOMContentLoaded', () => {
    checkTTSCapability();
    setupTTSPlayers();

    // Load voices immediately and wait for updates (Chrome needs this)
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
});

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
    console.log("Voices loaded:", availableVoices.length);
}

function checkTTSCapability() {
    if (!('speechSynthesis' in window)) {
        alert("Browser Anda tidak mendukung fitur Text-to-Speech. Audio mungkin tidak berfungsi.");
    }
}

function setupTTSPlayers() {
    // 1. Handle Main Card Buttons (Read everything in card)
    const audioButtons = document.querySelectorAll('.audio-btn');
    audioButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            speakCardContent(btn);
        });
    });

    // 2. Handle Small Individual Row Buttons
    const smallButtons = document.querySelectorAll('.btn-play-small');
    smallButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            speakRowContent(btn);
        });
    });
}

function speakCardContent(btn) {
    const card = btn.closest('.lesson-card');
    if (!card) return;

    // Detect if content is split into rows or one big block
    const vocabRows = card.querySelectorAll('.vocab-arabic');
    let textToSpeak = "";

    if (vocabRows.length > 0) {
        // Join all vocab items
        textToSpeak = Array.from(vocabRows).map(el => el.textContent).join('. ');
    } else {
        // Fallback to legacy block text
        const arabicElement = card.querySelector('.arabic-text, .tajwid-text');
        if (arabicElement) textToSpeak = arabicElement.textContent;
    }

    if (textToSpeak) {
        speakArabic(textToSpeak.trim(), btn);
    } else {
        console.warn("No text found.");
    }
}

function speakRowContent(btn) {
    const row = btn.closest('.vocab-row');
    if (!row) return;

    const arabicEl = row.querySelector('.vocab-arabic');
    if (arabicEl) {
        speakArabic(arabicEl.textContent.trim(), btn);
    }
}

function speakArabic(text, btn) {
    window.speechSynthesis.cancel();
    const originalText = btn.innerHTML;
    setButtonPlaying(btn);

    // Strategy 1: Local Browser TTS (Preferred)
    const arabicVoice = availableVoices.find(v => v.lang === 'ar-SA' || v.lang.includes('ar'));

    if (arabicVoice) {
        // We have a local voice, use it
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.voice = arabicVoice;
        utterance.rate = 0.8;
        utterance.volume = 1;

        utterance.onend = () => resetButton(btn, originalText);
        utterance.onerror = (e) => {
            console.error("Local TTS Error", e);
            // If local fails, try fallback
            playOnlineFallback(text, btn, originalText);
        };

        window.speechSynthesis.speak(utterance);
    } else {
        // Strategy 2: Online Fallback (Google Translate TTS)
        // Useful for Windows Desktop that often lacks Arabic voices
        console.warn("No local Arabic voice found. Switching to Online Fallback.");
        playOnlineFallback(text, btn, originalText);
    }
}

function playOnlineFallback(text, btn, originalText) {
    try {
        // Using Google Translate TTS API (UnOfficial but reliable for small apps)
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=ar&client=tw-ob`;
        const audio = new Audio(url);

        audio.onended = () => resetButton(btn, originalText);
        audio.onerror = (e) => {
            console.error("Online Audio Failed", e);
            alert("Gagal memutar audio. Pastikan koneksi internet aktif.");
            resetButton(btn, originalText);
        };

        audio.play().catch(err => {
            console.error("Playback interrupted", err);
            resetButton(btn, originalText);
        });
    } catch (e) {
        console.error("Fallback Error", e);
        resetButton(btn, originalText);
    }
}

function setButtonPlaying(btn) {
    if (btn.classList.contains('btn-play-small')) {
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Suara...';
    }

    btn.classList.add('playing');

    // Only set background if it's NOT the small button (small btn has css hover/active states)
    if (!btn.classList.contains('btn-play-small')) {
        btn.style.backgroundColor = 'var(--primary)';
        btn.style.color = '#fff';
    }

    btn.disabled = true;
}

function resetButton(btn, originalHtml) {
    if (originalHtml) {
        btn.innerHTML = originalHtml;
    } else {
        // Fallback
        if (btn.classList.contains('btn-play-small')) {
            btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            btn.innerHTML = '▶️ Putar';
        }
    }

    btn.classList.remove('playing');
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.disabled = false;
}
