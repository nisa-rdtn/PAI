const QUIZ_DATA = {
    arab: {
        easy: [
            { q: "Apa arti dari 'Baitun' (بَيْتٌ)?", options: ["Sekolah", "Rumah", "Pasar", "Masjid"], a: 1 },
            { q: "Apa bahasa Arab dari 'Satu'?", options: ["Wahidun", "Isnan", "Tsalatsah", "Arba'ah"], a: 0 },
            { q: "Apa arti dari 'Qolamun' (قَلَمٌ)?", options: ["Buku", "Pena", "Meja", "Kursi"], a: 1 },
            { q: "'Subahul Khair' artinya...", options: ["Selamat Malam", "Selamat Sore", "Selamat Pagi", "Selamat Jalan"], a: 2 },
            { q: "Apa arti dari 'Ummun' (أُمٌّ)?", options: ["Ayah", "Ibu", "Paman", "Kakek"], a: 1 },
            { q: "Bahasa Arab 'Mata' adalah...", options: ["Ainun", "Anfun", "Famun", "Yadun"], a: 0 },
            { q: "Apa arti 'Kabirun' (كَبِيْرٌ)?", options: ["Kecil", "Panjang", "Pendek", "Besar"], a: 3 }
        ],
        medium: [
            { q: "Apa arti kalimat 'Ana Uhibbu Ummi'?", options: ["Saya sayang Ayah", "Saya sayang Ibu", "Saya suka makan", "Saya pergi ke pasar"], a: 1 },
            { q: "Lawan kata dari 'Kabirun' (Besar) adalah...", options: ["Tawilun", "Qashirun", "Saghirun", "Jamilun"], a: 2 },
            { q: "'Aina' (أَيْنَ) digunakan untuk menanyakan...", options: ["Waktu", "Tempat", "Alasan", "Orang"], a: 1 },
            { q: "Apa bentuk fi'il madhi dari 'Sedang Menulis'?", options: ["Yaktubu", "Uktub", "Kataba", "Katib"], a: 2 },
            { q: "Apa arti dari 'As-Samaa' (السَّمَاء)?", options: ["Bumi", "Langit", "Laut", "Sungai"], a: 1 },
            { q: "'Mata' (مَتَى) artinya...", options: ["Kenapa", "Dimana", "Kapan", "Bagaimana"], a: 2 },
            { q: "Bahasa Arab 'Dokter' adalah...", options: ["Mudarrisun", "Tabibun", "Muhandisun", "Tajirun"], a: 1 }
        ],
        hard: [
            { q: "Terjemahkan: 'Dzahaba Zaidun ila al-Masjid'", options: ["Zaid pulang dari masjid", "Zaid duduk di masjid", "Zaid pergi ke masjid", "Zaid melihat masjid"], a: 2 },
            { q: "Apa jamak dari 'Kitabun'?", options: ["Kutubun", "Makatib", "Katibun", "Kitabat"], a: 0 },
            { q: "Lengkapi: ..... Hual Mudarris? (Siapakah guru itu?)", options: ["Ma", "Man", "Aina", "Kaifa"], a: 1 },
            { q: "'Al-Waqtu kasy-Syaif' artinya...", options: ["Waktu itu seperti emas", "Waktu itu seperti pedang", "Waktu itu uang", "Waktu itu cepat"], a: 1 },
            { q: "Fi'il Amr (perintah) dari 'Dzahaba' adalah...", options: ["Dzahaba", "Yadzhabu", "Idzhab", "Dzahib"], a: 2 },
            { q: "Apa arti 'Laa Ba'sa'?", options: ["Tidak apa-apa/Baik", "Tidak boleh", "Tidak tahu", "Tidak mau"], a: 0 },
            { q: "Manakah yang merupakan kata sifat?", options: ["Yakul", "Kursiyyun", "Jamilun", "Ila"], a: 2 }
        ]
    },
    tajwid: {
        easy: [
            { q: "Hukum Nun mati bertemu Hamzah (ء) adalah...", options: ["Ikhfa", "Izhhar", "Iqlab", "Idgham"], a: 1 },
            { q: "Ada berapa huruf Qalqalah?", options: ["4", "5", "6", "3"], a: 1 },
            { q: "Mad Thobi'i dibaca panjang berapa harakat?", options: ["2", "4", "5", "6"], a: 0 },
            { q: "Apa arti Ikhfa?", options: ["Jelas", "Dengung", "Samar", "Membalik"], a: 2 },
            { q: "Huruf 'Ba' (ب) termasuk huruf...", options: ["Izhhar", "Iqlab", "Idgham", "Ikhfa"], a: 1 },
            { q: "Ghunnah artinya...", options: ["Jelas", "Samar", "Pantul", "Dengung"], a: 3 },
            { q: "Manakah huruf Idgham Bighunnah?", options: ["Lam dan Ra", "Ya, Nun, Mim, Wau", "Ba", "Hamzah, Ha"], a: 1 }
        ],
        medium: [
            { q: "Hukum bacaan 'Min Robbihim' (Nun mati bertemu Ra) adalah...", options: ["Idgham Bighunnah", "Idgham Bilaghunnah", "Izhhar", "Ikhfa"], a: 1 },
            { q: "Iqlab terjadi jika Nun mati bertemu...", options: ["Ba", "Mim", "Fa", "Wau"], a: 0 },
            { q: "Berapa panjang Mad Wajib Muttashil?", options: ["2 Harakat", "2-4 Harakat", "4-5 Harakat", "6 Harakat"], a: 2 },
            { q: "Qalqalah Kubra terjadi jika huruf Qalqalah berada di...", options: ["Awal kata", "Tengah kata", "Akhir kata (waqaf)", "Awal ayat"], a: 2 },
            { q: "Hukum Mim mati bertemu Mim adalah...", options: ["Idgham Mimi", "Ikhfa Syafawi", "Izhhar Syafawi", "Iqlab"], a: 0 },
            { q: "Huruf Ikhfa berjumlah...", options: ["6", "10", "15", "13"], a: 2 },
            { q: "Contoh bacaan Izhhar Halqi adalah...", options: ["Min Ba'di", "Min 'Alaq", "Mir Robbihim", "Inna"], a: 1 }
        ],
        hard: [
            { q: "Apa perbedaan Idgham Bighunnah dan Bilaghunnah?", options: ["Panjang pendeknya", "Ada tidaknya dengung", "Jumlah hurufnya", "Tempat keluarnya"], a: 1 },
            { q: "Mad Jaiz Munfashil terjadi apabila...", options: ["Mad Thobi'i bertemu Hamzah dalam satu kata", "Mad Thobi'i bertemu Hamzah di lain kata", "Mad Thobi'i bertemu Tasydid", "Mad Thobi'i bertemu Sukun"], a: 1 },
            { q: "Hukum Lam Jalalah pada 'Bismillah' dibaca...", options: ["Tafkhim (Tebal)", "Tarqiq (Tipis)", "Ghunnah", "Qalqalah"], a: 1 },
            { q: "Hukum Mim mati bertemu Ba adalah...", options: ["Izhhar Syafawi", "Idgham Mimi", "Ikhfa Syafawi", "Iqlab"], a: 2 },
            { q: "Berapa harakat panjang Mad Lazim Mutsaqqal Kilmi?", options: ["2", "4", "5", "6"], a: 3 },
            { q: "Ra yang berharakat Dhommah dibaca...", options: ["Tarqiq", "Tafkhim", "Ghunnah", "Qalqalah"], a: 1 },
            { q: "Apa itu Saktah?", options: ["Berhenti sejenak tanpa nafas", "Berhenti total", "Melanjut bacaan", "Mendengung"], a: 0 }
        ]
    },
    nahwu: {
        easy: [
            { q: "Kalimah (Kata) dalam bahasa Arab dibagi menjadi...", options: ["2", "3", "4", "5"], a: 1 },
            { q: "Kata 'Masjidun' (مَسْجِدٌ) termasuk golongan...", options: ["Fi'il", "Harf", "Isim", "Jumlah"], a: 2 },
            { q: "Kata 'Di' (Fie) termasuk golongan...", options: ["Isim", "Fi'il", "Harf", "Dhomir"], a: 2 },
            { q: "Fi'il artinya...", options: ["Kata Benda", "Kata Kerja", "Kata Sambung", "Kata Sifat"], a: 1 },
            { q: "Tanda dasar Rafa' (Marfu') adalah...", options: ["Fathah", "Kasrah", "Dhommah", "Sukun"], a: 2 },
            { q: "Zaidun (زَيْدٌ). Harakat akhirnya dhommah karena ia...", options: ["Isim", "Fi'il", "Harf", "Mabni"], a: 0 },
            { q: "Isim yang menunjukkan satu disebut...", options: ["Mufrad", "Mutsanna", "Jamak", "Mudzakkar"], a: 0 }
        ],
        medium: [
            { q: "Mubtada dan Khobar harus selalu dibaca...", options: ["Manshub", "Majrur", "Marfu'", "Jazm"], a: 2 },
            { q: "Dalam kalimat 'Dzahaba Zaidun', Zaidun berkedudukan sebagai...", options: ["Mubtada", "Khobar", "Fa'il (Pelaku)", "Maf'ul Bih (Objek)"], a: 2 },
            { q: "Fi'il Mudhari' diawali dengan huruf mudhara'ah yang berjumlah...", options: ["3", "4", "5", "6"], a: 1 },
            { q: "Isim yang diawali Alif Lam (Al-) tidak boleh menerima...", options: ["Fathah", "Kasrah", "Dhommah", "Tanwin"], a: 3 },
            { q: "Kata yang menunjukkan dua (ganda) disebut...", options: ["Mufrad", "Jamak", "Mutsanna", "Isim Lima"], a: 2 },
            { q: "Harf Jar (seperti 'Fie') membuat isim setelahnya menjadi...", options: ["Marfu'", "Manshub", "Majrur", "Jazm"], a: 2 },
            { q: "Tanda Nashob dasar adalah...", options: ["Fathah", "Kasrah", "Dhommah", "Sukun"], a: 0 }
        ],
        hard: [
            { q: "Apa hukum I'rab dari Maf'ul Bih (Objek)?", options: ["Marfu'", "Manshub", "Majrur", "Jazm"], a: 1 },
            { q: "Isim Ghairu Munsharif adalah isim yang...", options: ["Tidak menerima Tanwin", "Tidak menerima Alif Lam", "Selalu Mabni", "Selalu Marfu"], a: 0 },
            { q: "Fi'il Madhi hukum asalnya adalah...", options: ["Murab", "Mabni", "Manshub", "Majrur"], a: 1 },
            { q: "Kelompok kata 'Kana wa Akhwatuha' merubah...", options: ["Mubtada jadi Manshub", "Khobar jadi Manshub", "Fa'il jadi Manshub", "Khobar jadi Majrur"], a: 1 },
            { q: "Jamak Mudzakkar Salim ditandai dengan tambahan...", options: ["Alif dan Ta", "Wau dan Nun", "Ya dan Nun", "Alif dan Nun"], a: 1 },
            { q: "Asmaul Khomsah (Isim yang lima) ketika Rafa' tandanya dengan...", options: ["Dhommah", "Alif", "Wau", "Nun"], a: 2 },
            { q: "Fi'il Mudhari' menjadi Majzum apabila...", options: ["Diawali Lan", "Diawali Lam", "Diawali An", "Diawali Inna"], a: 1 }
        ]
    }
};
