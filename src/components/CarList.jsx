import React, { useState } from 'react';
import CarCard from './CarCard';
import CarFilters from './CarFilters';

import onixImg from '../assets/images/onix.jpg';
import hb20Img from '../assets/images/hb20.jpg';
import golImg from '../assets/images/gol.jpg';
import civicImg from '../assets/images/civic.jpg';
import corollaImg from '../assets/images/corolla.jpg';
import kaImg from '../assets/images/ka.jpg';
import unoImg from '../assets/images/uno.jpg';
import palioImg from '../assets/images/argo.jpg';
import prismaImg from '../assets/images/prisma.jpg';

const carros = [
  {
    id: 1,
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: '2023',
    preco: 40000,
    combustivel: 'Gasolina',
    imagem: onixImg,
    descricao: '1.6 - 16V - 86CV - 4p',
  },
  {
    id: 2,
    marca: 'Hyundai',
    modelo: 'HB20',
    ano: '2022',
    preco: 45000,
    combustivel: 'Flex',
    imagem: hb20Img,
    descricao: '1.0 - 12V - Flex - 4p',
  },
  {
    id: 3,
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: '2021',
    preco: 35000,
    combustivel: 'Flex',
    imagem: golImg,
    descricao: '1.6 - Flex - 4p',
  },
  {
    id: 4,
    marca: 'Honda',
    modelo: 'Civic',
    ano: '2020',
    preco: 65000,
    combustivel: 'Gasolina',
    imagem: civicImg,
    descricao: '2.0 - 16V - FlexOne - 4p',
  },
  {
    id: 5,
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: '2019',
    preco: 60000,
    combustivel: 'Flex',
    imagem: corollaImg,
    descricao: '2.0 - Dual VVT-i - 4p',
  },
  {
    id: 6,
    marca: 'Ford',
    modelo: 'Ka',
    ano: '2018',
    preco: 28000,
    combustivel: 'Flex',
    imagem: kaImg,
    descricao: '1.0 - 12V - Flex - 4p',
  },
  {
    id: 7,
    marca: 'Fiat',
    modelo: 'Uno',
    ano: '2017',
    preco: 25000,
    combustivel: 'Flex',
    imagem: unoImg,
    descricao: '1.0 - 8V - Economy - 4p',
  },
  {
    id: 8,
    marca: 'Fiat',
    modelo: 'Palio',
    ano: '2016',
    preco: 22000,
    combustivel: 'Flex',
    imagem: palioImg,
    descricao: '1.0 - Attractive - 4p',
  },
  {
    id: 9,
    marca: 'Chevrolet',
    modelo: 'Prisma',
    ano: '2015',
    preco: 30000,
    combustivel: 'Flex',
    imagem: prismaImg,
    descricao: '1.4 - LT - 4p',
  },
];

const CarList = () => {
  const [filters, setFilters] = useState({
    marca: '',
    modelo: '',
    ano: '',
    preco: '',
    combustivel: '',
  });

  const filtrarCarros = (car) => {
    return (
      (!filters.marca || car.marca === filters.marca) &&
      (!filters.modelo || car.modelo === filters.modelo) &&
      (!filters.ano || car.ano === filters.ano) &&
      (!filters.combustivel || car.combustivel === filters.combustivel) &&
      (!filters.preco ||
        (filters.preco === '1' && car.preco <= 30000) ||
        (filters.preco === '2' && car.preco > 30000 && car.preco <= 50000) ||
        (filters.preco === '3' && car.preco > 50000))
    );
  };

  const carrosFiltrados = carros.filter(filtrarCarros);

  return (
    <div className="carros container my-5" id="carros">
      <div className="filtros mb-4">
        <CarFilters filters={filters} setFilters={setFilters} />
      </div>
      <div className="row g-4">
        {carrosFiltrados.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
