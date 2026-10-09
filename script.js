// =====================
// NAVBAR MOBILE
// =====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// DATA SOAL KUIS (30 SOAL)
// =====================
const quizData = [
    // PENEGAK (1-5)
    { question: "Pramuka Penegak berusia berapa tahun?",
      options: ["11-15 tahun", "16-20 tahun", "21-25 tahun", "7-10 tahun"], answer: 1 },
    { question: "Apa nama satuan dalam Pramuka Penegak?",
      options: ["Pasukan", "Perindukan", "Ambalan", "Racana"], answer: 2 },
    { question: "Siapa yang memimpin Ambalan?",
      options: ["Pratama", "Pradana", "Sulung", "Pinsa"], answer: 1 },
    { question: "Arti kata 'Bantara' adalah...",
      options: ["Pelaksana", "Pengawal", "Pemimpin", "Penjaga"], answer: 1 },
    { question: "Berapa jumlah tingkatan dalam Pramuka Penegak?",
      options: ["1", "2", "3", "4"], answer: 1 },

    // SANDI (6-12)
    { question: "Sandi Morse menggunakan simbol...",
      options: ["Angka & huruf", "Titik & garis", "Garis & kotak", "Simbol kimia"], answer: 1 },
    { question: "Dalam sandi Morse, huruf 'S' dilambangkan dengan...",
      options: ["...", "---", ".-.", "-.-"], answer: 0 },
    { question: "Dalam sandi Morse, huruf 'O' dilambangkan dengan...",
      options: ["...", "---", ".-.", "-.-"], answer: 1 },
    { question: "Sandi A1Z26 artinya...",
      options: ["A=1, Z=26", "A=26, Z=1", "A=0, Z=25", "A=1, Z=1"], answer: 0 },
    { question: "Sandi Rumput menggunakan lambang...",
      options: ["Kotak", "Garis panjang & pendek", "Angka", "Titik saja"], answer: 1 },
    { question: "Sandi Napoleon ditulis dengan cara...",
      options: ["Dibalik per kelompok", "Ditambah", "Dikali", "Dikurangi"], answer: 0 },
    { question: "Sandi Kotak I menggunakan berapa kotak?",
      options: ["2 kotak", "3 kotak", "4 kotak", "9 kotak"], answer: 1 },

    // TALI TEMALI (13-19)
    { question: "Simpul untuk menyambung 2 tali sama besar adalah...",
      options: ["Simpul Hidup", "Simpul Mati", "Simpul Tiang", "Simpul Laso"], answer: 1 },
    { question: "Simpul yang bisa digeser/dilonggarkan adalah...",
      options: ["Simpul Mati", "Simpul Hidup", "Simpul Jangkar", "Simpul Anyam"], answer: 1 },
    { question: "Ikatan untuk 2 tongkat tegak lurus (90°) disebut...",
      options: ["Ikatan Silang", "Ikatan Palang", "Ikatan Kaki Tiga", "Ikatan Canggah"], answer: 1 },
    { question: "Simpul untuk mengikat tali ke tiang adalah...",
      options: ["Simpul Mati", "Simpul Tiang", "Simpul Anyam", "Simpul Kembar"], answer: 1 },
    { question: "Simpul untuk menyambung 2 tali berbeda ukuran adalah...",
      options: ["Simpul Mati", "Simpul Anyam", "Simpul Laso", "Simpul Kembar"], answer: 1 },
    { question: "Ikatan untuk 3 tongkat berdiri tegak disebut...",
      options: ["Ikatan Palang", "Ikatan Kaki Tiga", "Ikatan Silang", "Ikatan Canggah"], answer: 1 },
    { question: "Ikatan yang menyambung 2 tongkat sejajar/berurutan adalah...",
      options: ["Ikatan Palang", "Ikatan Silang", "Ikatan Canggah", "Ikatan Kaki Tiga"], answer: 2 },

    // PETA & KOMPAS (20-23)
    { question: "Arah Timur pada kompas menunjukkan derajat...",
      options: ["0°", "90°", "180°", "270°"], answer: 1 },
    { question: "Rumus back azimuth adalah...",
      options: ["Azimuth + 90°", "Azimuth ± 180°", "Azimuth × 2", "Azimuth ÷ 2"], answer: 1 },
    { question: "Bagian kompas yang menunjuk utara adalah...",
      options: ["Dial", "Jarum penunjuk", "Visir", "Cover"], answer: 1 },
    { question: "Arah Selatan pada kompas menunjukkan derajat...",
      options: ["0°", "90°", "180°", "270°"], answer: 2 },

    // SURVIVAL (24-27)
    { question: "Berapa hari manusia bisa bertahan tanpa air?",
      options: ["1 hari", "3 hari", "7 hari", "14 hari"], answer: 1 },
    { question: "Lumut biasanya tumbuh subur di sisi pohon arah...",
      options: ["Selatan", "Utara (lembab)", "Timur", "Barat"], answer: 1 },
    { question: "Berapa lama manusia bisa bertahan tanpa makanan?",
      options: ["3 hari", "1 minggu", "3 minggu", "3 bulan"], answer: 2 },
    { question: "Bintang Biduk (Ursa Major) menunjuk arah...",
      options: ["Selatan", "Timur", "Barat", "Utara"], answer: 3 },

    // PPPK (28-30)
    { question: "Penanganan luka bakar yang benar adalah...",
      options: ["Beri odol", "Alirkan air dingin 10 menit", "Beri mentega", "Dibiarkan saja"], answer: 1 },
    { question: "Yang TIDAK boleh dilakukan saat patah tulang adalah...",
      options: ["Imobilisasi", "Memberi bidai", "Menggerakkan area patah", "Bawa ke RS"], answer: 2 },
    { question: "Penanganan pertama saat pingsan adalah...",
      options: ["Siram air kencang", "Baringkan, angkat kaki lebih tinggi", "Dudukkan", "Beri minum banyak"], answer: 1 }
];

// =====================
// LOGIKA KUIS
// =====================
let currentQuestion = 0;
let score = 0;
let answered = false;

const questionCounter = document.getElementById('questionCounter');
const scoreDisplay = document.getElementById('scoreDisplay');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const quizContainer = document.getElementById('quizContainer');
const quizResult = document.getElementById('quizResult');

function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestion === quizData.length - 1 
        ? 'Lihat Hasil →' : 'Selanjutnya →';

    const q = quizData[currentQuestion];
    questionText.textContent = q.question;
    questionCounter.textContent = `Soal ${currentQuestion + 1} dari ${quizData.length}`;
    scoreDisplay.textContent = `Skor: ${score}`;
    progressFill.style.width = `${(currentQuestion / quizData.length) * 100}%`;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, btn) {
    if (answered) return;
    answered = true;

    const correctIndex = quizData[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.add('disabled'));

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
    }

    scoreDisplay.textContent = `Skor: ${score}`;
    nextBtn.disabled = false;
    progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
}

nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.classList.add('hidden');
    quizResult.classList.remove('hidden');
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = quizData.length;

    const percent = (score / quizData.length) * 100;
    let message = '';
    if (percent === 100) message = '🎉 Sempurna! Kamu Pramuka sejati!';
    else if (percent >= 80) message = '🌟 Hebat! Pengetahuanmu luar biasa!';
    else if (percent >= 60) message = '👍 Bagus! Terus belajar ya!';
    else if (percent >= 40) message = '💪 Cukup baik, tingkatkan lagi!';
    else message = '📚 Ayo belajar lagi tentang Pramuka Penegak!';

    document.getElementById('resultMessage').textContent = message;
    quizResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizResult.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
    quizContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// =====================
// ANIMASI SCROLL
// =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .kegiatan-item, .stat-item, .struktur-item, .materi-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// INIT
loadQuestion();
