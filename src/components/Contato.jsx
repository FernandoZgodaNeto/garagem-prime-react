import React from 'react';

const Contato = () => {
  return (
    <section className="contato bg-light py-5" id="contato">
      <div className="container">
        <h2 className="text-center mb-4">Entre em Contato</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" placeholder="Seu nome" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="seu@email.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                <textarea className="form-control" id="mensagem" rows="4" placeholder="Escreva sua mensagem"></textarea>
              </div>
              <button type="submit" className="btn w-100">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
