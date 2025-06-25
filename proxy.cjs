const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
}));

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const response = await fetch('https://us-central1-cryptic-skyline-463920-m1.cloudfunctions.net/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer S7SkbvvUCy3DBbhxmPULUrlfPIWUT7HkkTMLLcfHdToh4cwlHhTGemqPHy6g1tBf',
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).send('Erro no proxy');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy rodando em http://localhost:${PORT}`);
});