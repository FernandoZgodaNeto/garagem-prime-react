import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-white py-4" id="footer">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5>Sobre Nós</h5>
            <p>
              Somos especializados na venda de veículos seminovos com qualidade e procedência.
              Garantia de bom negócio!
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contato</h5>
            <p><i className="fas fa-phone"></i> (45) 99999-9999</p>
            <p><i className="fas fa-envelope"></i> contato@garagemprime.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Rua Exemplo, 123 - Cascavel, PR</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Siga-nos</h5>
            <a href="#" className="text-white me-3">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <small>&copy; 2025 Garagem Prime. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;