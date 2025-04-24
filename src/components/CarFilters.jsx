import React from 'react';

const CarFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  // Opções fixas baseadas nos carros cadastrados
  const opcoes = {
    marca: ['', 'Chevrolet', 'Hyundai', 'Volkswagen', 'Honda', 'Toyota', 'Ford', 'Fiat'],
    modelo: ['', 'Onix', 'HB20', 'Gol', 'Civic', 'Corolla', 'Ka', 'Uno', 'Palio', 'Prisma'],
    ano: ['', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'],
    preco: [
      '',
      { value: '1', label: 'Até R$30.000' },
      { value: '2', label: 'R$30.001 - R$50.000' },
      { value: '3', label: 'Acima de R$50.000' },
    ],
    combustivel: ['', 'Gasolina', 'Flex'],
  };

  return (
    <form className="row g-3 justify-content-center">
      {['marca', 'modelo', 'ano', 'preco', 'combustivel'].map((filtro) => (
        <div className="col-md-2" key={filtro}>
          <label htmlFor={filtro} className="form-label text-capitalize">{filtro}</label>
          <select
            className="form-select"
            id={filtro}
            value={filters[filtro]}
            onChange={handleChange}
          >
            {opcoes[filtro].map((op, index) =>
              typeof op === 'string' ? (
                <option key={index} value={op}>
                  {op === '' ? 'Todos' : op}
                </option>
              ) : (
                <option key={index} value={op.value}>
                  {op.label}
                </option>
              )
            )}
          </select>
        </div>
      ))}
    </form>
  );
};

export default CarFilters;