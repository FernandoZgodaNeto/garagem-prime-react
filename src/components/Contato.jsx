import React, { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://us-central1-cryptic-skyline-463920-m1.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer S7SkbvvUCy3DBbhxmPULUrlfPIWUT7HkkTMLLcfHdToh4cwlHhTGemqPHy6g1tBf',
        },
        body: JSON.stringify({
          toMail: email,
          content: `Nome: ${nome}\nMensagem: ${mensagem}`,
        }),
      });

      const text = await response.text();

      if (response.ok) {
        setStatus('Email enviado com sucesso!');
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        setStatus(`Erro: ${text}`);
      }
    } catch (error) {
      setStatus('Erro ao enviar email. Tente novamente mais tarde.');
    }
  };

  return (
    <section className="contato bg-light py-5" id="contato">
      <div className="container">
        <h2 className="text-center mb-4">Entre em Contato</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                <textarea
                  className="form-control"
                  id="mensagem"
                  rows="4"
                  placeholder="Escreva sua mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar</button>
              {status && <div className="mt-3 alert alert-info">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;