import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="col-md-4">
      <div
        className="card border-0 shadow h-100"
        data-marca={car.marca}
        data-modelo={car.modelo}
        data-ano={car.ano}
        data-preco={car.preco}
        data-combustivel={car.combustivel}
      >
        <img src={car.imagem} className="card-img-top" alt={car.modelo} />
        <div className="card-body">
          <h5 className="card-title">{`${car.marca} ${car.modelo}`}</h5>
          <p className="card-text">{car.descricao}</p>
          <h4>{`R$ ${car.preco.toLocaleString('pt-BR')}`}</h4>
          <a href="http://wa.me/554498882139" className="btn btn-success w-100">
            <i className="fab fa-whatsapp"></i> Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
