import { ServiceCategory, AdditionalGroup } from '../types';

/**
 * CONFIGURAÇÃO CENTRAL DA EMPRESA
 * Todos os dados, endereços, logo e serviços estão centralizados aqui.
 */

export const COMPANY_CONFIG = {
  name: 'Estética Automotiva do Cremozinho',
  tagline: 'Seu veículo merece um tratamento de excelência.',
  tableTitle: 'TABELA DE SERVIÇOS & VALORES',
  footerQuote: 'Cuidado em cada detalhe.',
  cityState: 'Ribeirão Cascalheira — MT',
  logoUrl: 'https://i.postimg.cc/tgF29FSQ/FA1537B2-B399-46C7-84E9-C3EEE1BE9454.png',
  address: {
    street: 'Rua Pará, nº 175',
    neighborhood: "Bairro Caixa D'Água",
    cityState: 'Ribeirão Cascalheira — MT',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Para+175+Bairro+Caixa+Dagua+Ribeirao+Cascalheira+MT',
  },
  /**
   * WHATSAPP DE AGENDAMENTO
   * Deixe vazio ("") enquanto não houver telefone oficial.
   * Quando preenchido (ex: "5566999999999"), o botão "Consultar serviço"
   * e o botão flutuante de agendamento serão ativados automaticamente.
   */
  whatsappNumber: '', // configure aqui quando disponível
  audioNarrationPath: '/audio/boas-vindas.mp3',
  audioTranscript: 'Olá! Seja bem-vindos à Estética Automotiva do Cremozinho. Confira nossos preços promocionais em nossa tabela. Será um prazer atender você.',
};

export const CATEGORIES_DATA: ServiceCategory[] = [
  {
    id: 'motos-biz-bros',
    anchor: 'motos',
    name: 'Motos — Biz até Bros',
    subtitle: 'Lavagens técnicas e revitalização para motos urbanas',
    image: '/src/assets/images/category_motorcycles_1794261701292.jpg',
    services: [
      {
        id: 'moto-1',
        name: 'Lavagem com cera',
        price: 'R$ 60,00',
        priceRaw: 60,
        category: 'Motos — Biz até Bros',
      },
      {
        id: 'moto-2',
        name: 'Lavagem com cera e revitalização',
        price: 'R$ 100,00',
        priceRaw: 100,
        category: 'Motos — Biz até Bros',
      },
      {
        id: 'moto-3',
        name: 'Lavagem com cera, revitalização e detalhamento do motor',
        price: 'R$ 150,00',
        priceRaw: 150,
        category: 'Motos — Biz até Bros',
      },
      {
        id: 'moto-4',
        name: 'Lavagem detalhada com cera de carnaúba pura e vitrificação',
        price: 'R$ 300,00',
        priceRaw: 300,
        isCompletePackage: true,
        category: 'Motos — Biz até Bros',
      },
    ],
  },
  {
    id: 'motos-alta-cilindrada',
    anchor: 'motos-alta',
    name: 'Motos de Alta Cilindrada',
    subtitle: 'Proteção avançada e detalhamento para superesportivas e big trails',
    image: '/src/assets/images/category_motorcycles_1794261701292.jpg',
    services: [
      {
        id: 'moto-alta-1',
        name: 'Lavagem com cera',
        price: 'R$ 85,00',
        priceRaw: 85,
        category: 'Motos de Alta Cilindrada',
      },
      {
        id: 'moto-alta-2',
        name: 'Lavagem com cera, detalhamento do motor e revitalização',
        price: 'R$ 200,00',
        priceRaw: 200,
        category: 'Motos de Alta Cilindrada',
      },
      {
        id: 'moto-alta-3',
        name: 'Lavagem com cera, detalhamento do motor e vitrificação',
        price: 'R$ 350,00',
        priceRaw: 350,
        isCompletePackage: true,
        category: 'Motos de Alta Cilindrada',
      },
    ],
  },
  {
    id: 'carros-pequenos',
    anchor: 'carros',
    name: 'Carros Pequenos',
    subtitle: 'Tratamento de alto padrão para hatchbacks e compactos',
    image: '/src/assets/images/category_small_cars_1794261702886.jpg',
    services: [
      {
        id: 'carro-1',
        name: 'Lavagem com cera',
        price: 'R$ 155,00',
        priceRaw: 155,
        category: 'Carros Pequenos',
      },
      {
        id: 'carro-2',
        name: 'Lavagem com cera e revitalização interna',
        price: 'R$ 200,00',
        priceRaw: 200,
        category: 'Carros Pequenos',
      },
      {
        id: 'carro-3',
        name: 'Lavagem detalhada com cera de carnaúba e revitalização',
        price: 'R$ 250,00',
        priceRaw: 250,
        isCompletePackage: true,
        category: 'Carros Pequenos',
      },
    ],
  },
  {
    id: 'picapes-suvs',
    anchor: 'suvs-picapes',
    name: 'Picapes ou SUVs',
    subtitle: 'Limpeza profunda e conservação de veículos médios e utilitários',
    image: '/src/assets/images/category_suv_pickups_1794261704031.jpg',
    services: [
      {
        id: 'suv-1',
        name: 'Lavagem com cera',
        price: 'R$ 170,00',
        priceRaw: 170,
        category: 'Picapes ou SUVs',
      },
      {
        id: 'suv-2',
        name: 'Lavagem com cera e revitalização interna',
        price: 'R$ 200,00',
        priceRaw: 200,
        category: 'Picapes ou SUVs',
      },
      {
        id: 'suv-3',
        name: 'Lavagem detalhada com cera de carnaúba e revitalização',
        price: 'R$ 250,00',
        priceRaw: 250,
        isCompletePackage: true,
        category: 'Picapes ou SUVs',
      },
    ],
  },
  {
    id: 'camionetes',
    anchor: 'camionetes',
    name: 'Camionetes',
    subtitle: 'Detalhamento pesado e proteção integral para grandes portes',
    image: '/src/assets/images/category_trucks_1794261704066.jpg',
    services: [
      {
        id: 'cam-1',
        name: 'Lavagem com cera',
        price: 'R$ 200,00',
        priceRaw: 200,
        category: 'Camionetes',
      },
      {
        id: 'cam-2',
        name: 'Lavagem com cera e revitalização interna',
        price: 'R$ 250,00',
        priceRaw: 250,
        category: 'Camionetes',
      },
      {
        id: 'cam-3',
        name: 'Lavagem detalhada com cera de carnaúba e revitalização',
        price: 'R$ 300,00',
        priceRaw: 300,
        isCompletePackage: true,
        category: 'Camionetes',
      },
    ],
  },
];

export const ADDITIONAL_GROUPS: AdditionalGroup[] = [
  {
    id: 'interior',
    title: 'Higienização Interior',
    services: [
      {
        id: 'add-1',
        name: 'Higienização de carpete',
        price: 'R$ 120,00',
        priceRaw: 120,
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Interior',
      },
      {
        id: 'add-2',
        name: 'Higienização e troca de filtro de ar-condicionado',
        price: 'R$ 150,00',
        priceRaw: 150,
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Interior',
      },
      {
        id: 'add-3',
        name: 'Higienização de bancos de tecido',
        price: 'R$ 350,00',
        priceRaw: 350,
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Interior',
      },
      {
        id: 'add-4',
        name: 'Higienização e hidratação de bancos de couro',
        price: 'R$ 200,00',
        priceRaw: 200,
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Interior',
      },
      {
        id: 'add-5',
        name: 'Higienização de teto',
        price: 'R$ 150,00',
        priceRaw: 150,
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Interior',
      },
    ],
  },
  {
    id: 'motor-chassi',
    title: 'Motor e Chassi',
    services: [
      {
        id: 'add-6',
        name: 'Higienização de motor com verniz',
        price: 'R$ 160,00',
        priceRaw: 160,
        category: 'Serviços Adicionais',
        subgroup: 'Motor e Chassi',
      },
      {
        id: 'add-7',
        name: 'Higienização de chassi',
        price: 'a partir de R$ 150,00',
        isStartingPrice: true,
        isEvaluation: true,
        evaluationNote: 'sob avaliação',
        category: 'Serviços Adicionais',
        subgroup: 'Motor e Chassi',
      },
    ],
  },
  {
    id: 'vidros',
    title: 'Vidros e Visibilidade',
    services: [
      {
        id: 'add-8',
        name: 'Remoção de chuva ácida dos vidros laterais e traseiro',
        price: 'R$ 80,00',
        priceRaw: 80,
        category: 'Serviços Adicionais',
        subgroup: 'Vidros e Visibilidade',
      },
      {
        id: 'add-9',
        name: 'Polimento de para-brisa',
        price: 'R$ 500,00',
        priceRaw: 500,
        category: 'Serviços Adicionais',
        subgroup: 'Vidros e Visibilidade',
      },
    ],
  },
  {
    id: 'pintura-protecao',
    title: 'Pintura, Enceramento e Vitrificação',
    services: [
      {
        id: 'add-10',
        name: 'Descontaminação de pintura',
        price: 'a partir de R$ 150,00',
        isStartingPrice: true,
        isEvaluation: true,
        evaluationNote: 'sob avaliação',
        category: 'Serviços Adicionais',
        subgroup: 'Pintura, Enceramento e Vitrificação',
      },
      {
        id: 'add-11',
        name: 'Enceramento técnico',
        price: 'a partir de R$ 250,00',
        isStartingPrice: true,
        isEvaluation: true,
        evaluationNote: 'sob avaliação',
        category: 'Serviços Adicionais',
        subgroup: 'Pintura, Enceramento e Vitrificação',
      },
      {
        id: 'add-12',
        name: 'Polimento de farol',
        price: 'R$ 150,00',
        priceRaw: 150,
        category: 'Serviços Adicionais',
        subgroup: 'Pintura, Enceramento e Vitrificação',
      },
      {
        id: 'add-13',
        name: 'Vitrificação da pintura',
        price: 'de R$ 900,00 a R$ 1.500,00',
        isRangePrice: true,
        isEvaluation: true,
        evaluationNote: 'sob avaliação, dependendo do veículo',
        isCompletePackage: true,
        category: 'Serviços Adicionais',
        subgroup: 'Pintura, Enceramento e Vitrificação',
      },
    ],
  },
  {
    id: 'polimentos',
    title: 'Polimentos Técnicos',
    services: [
      {
        id: 'add-14',
        name: 'Polimento de carro pequeno',
        price: 'R$ 500,00',
        priceRaw: 500,
        category: 'Serviços Adicionais',
        subgroup: 'Polimentos Técnicos',
      },
      {
        id: 'add-15',
        name: 'Polimento de carro SUV ou picape',
        price: 'R$ 700,00',
        priceRaw: 700,
        category: 'Serviços Adicionais',
        subgroup: 'Polimentos Técnicos',
      },
      {
        id: 'add-16',
        name: 'Polimento de camionete',
        price: 'R$ 900,00',
        priceRaw: 900,
        category: 'Serviços Adicionais',
        subgroup: 'Polimentos Técnicos',
      },
    ],
  },
  {
    id: 'residencial',
    title: 'Higienização Residencial',
    services: [
      {
        id: 'add-17',
        name: 'Higienização de sofá',
        price: 'a partir de R$ 300,00',
        isStartingPrice: true,
        isEvaluation: true,
        evaluationNote: 'sob avaliação',
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Residencial',
      },
      {
        id: 'add-18',
        name: 'Higienização de colchão',
        price: 'a partir de R$ 200,00',
        isStartingPrice: true,
        isEvaluation: true,
        evaluationNote: 'sob avaliação',
        category: 'Serviços Adicionais',
        subgroup: 'Higienização Residencial',
      },
    ],
  },
];

export const TOTAL_MAIN_SERVICES_COUNT = CATEGORIES_DATA.reduce(
  (acc, cat) => acc + cat.services.length,
  0
);

export const TOTAL_ADDITIONAL_SERVICES_COUNT = ADDITIONAL_GROUPS.reduce(
  (acc, grp) => acc + grp.services.length,
  0
);

export const TOTAL_SERVICES_COUNT =
  TOTAL_MAIN_SERVICES_COUNT + TOTAL_ADDITIONAL_SERVICES_COUNT;
