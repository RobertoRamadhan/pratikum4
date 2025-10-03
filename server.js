// server.js
const express = require("express");
const app = express();
const port = 8001;

// Data artikel
const articles = [
  {
    id: 1,
    title: "Belajar Express.js untuk Pemula",
    urlImage: "https://i.ytimg.com/vi/L7-u0CHm1GI/maxresdefault.jpg",
    description: "Express.js adalah web framework Node.js yang ringan dan fleksibel untuk membangun aplikasi web dengan API. Dengan sintaks yang sederhana, Anda dapat membuat server dengan cepat.",
    author: "Budi Setiawan",
    link: "https://expressjs.com/en/starter/hello-world.html"
  },
  {
    id: 2,
    title: "Membangun API dengan Node.js",
    urlImage: "https://nodejs.org/static/images/logo.svg",
    description: "Panduan lengkap membuat RESTful API dengan Node.js dan Express. Langkah pertama adalah memastikan Node.js sudah terinstall di komputer Anda, kemudian install Express menggunakan npm.",
    author: "Siti Nurhaliza",
    link: "https://nodejs.org/en/docs/guides/getting-started-guide"
  },
];

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint root
app.get('/', (req, res) => {
  res.json({
    message: "Selamat datang di API artikel",
    endpoints: {
      articles: "/api/test/getarticle"
    }
  });
});

// Endpoint untuk mendapatkan semua artikel
app.get('/api/test/getarticle', (req, res) => {
  res.json({
    status: "success",
    data: articles
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});