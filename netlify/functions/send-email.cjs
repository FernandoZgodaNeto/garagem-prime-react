const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const body = JSON.parse(event.body);

    const response = await fetch('https://us-central1-cryptic-skyline-463920-m1.cloudfunctions.net/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer S7SkbvvUCy3DBbhxmPULUrlfPIWUT7HkkTMLLcfHdToh4cwlHhTGemqPHy6g1tBf',
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    console.error('Erro na função Netlify:', err);
    return {
      statusCode: 500,
      body: 'Erro ao enviar e-mail',
    };
  }
};