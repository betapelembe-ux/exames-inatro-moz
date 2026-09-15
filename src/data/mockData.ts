import { ExamQuestion, BenefitItem, StudentReview, FaqItem } from '../types';
import edsonPhoto from '../assets/images/edson_macamo_license_1788610698188.jpg';
import taniaPhoto from '../assets/images/tania_sitoe_license_1788610713802.jpg';
import inatroExamImage from '../assets/images/inatro_mobile_exam.jpg';

export const SAMPLE_QUESTIONS: ExamQuestion[] = [
  {
    id: 'q2',
    category: 'sinais',
    categoryLabel: 'Sinais Verticais de Trânsito',
    codeReference: 'Regulamento de Sinalização de Trânsito MZ',
    question: 'Qual é a diferença fundamental entre o sinal B1 (Cedência de Passagem - triângulo invertido) e o sinal B2 (STOP - octógono vermelho)?',
    options: [
      'Não há diferença prática, ambos obrigam a imobilização total da viatura em qualquer circunstância',
      'No sinal B1 abranda e só para se vier outro veículo; no sinal B2 a paragem total é sempre obrigatória, mesmo com a via desimpedida',
      'O sinal B2 só é válido durante o período noturno e em dias de chuva',
      'O sinal B1 dá prioridade de passagem a quem entra na rotunda'
    ],
    correctIndex: 1,
    explanation: 'No sinal de STOP (B2), a paragem completa das rodas é estritamente obrigatória antes da linha transversal de paragem, mesmo que não venha ninguém a 1 km de distância. No sinal B1, apenas modera a velocidade e para se necessário.',
    trapAlert: 'No exame prático e teórico, chumbar por não imobilizar totalmente as rodas no STOP é a causa #1 de reprovação.',
    diagramSvgType: 'sinal_stop'
  },
  {
    id: 'q3',
    category: 'prioridade',
    categoryLabel: 'Rotundas & Circulação',
    codeReference: 'Código da Estrada de Moçambique - Art. 32º',
    question: 'Ao aproximar-se de uma praça de tráfego giratório (rotunda), quem tem a prioridade de passagem?',
    options: [
      'O veículo que pretende entrar na rotunda porque vem pela direita',
      'O condutor que já se encontra a circular dentro da rotunda',
      'O veículo mais pesado ou com passageiros a bordo',
      'Quem circular com os quatro piscas de emergência ligados'
    ],
    correctIndex: 1,
    explanation: 'Salvo sinalização em contrário, os veículos que já transitam dentro da rotunda têm prioridade sobre todos os que nela pretendem entrar. Quem vai entrar deve ceder a passagem.',
    trapAlert: 'Atenção à exceção: Se existir sinalização contrária na aproximação, obedece-se ao sinal, mas a regra geral é prioridade de quem já circula nela.',
    diagramSvgType: 'rotunda'
  },
  {
    id: 'q4',
    category: 'regras',
    categoryLabel: 'Velocidades & Localidades',
    codeReference: 'Limites de Velocidade em Moçambique',
    question: 'Qual é o limite máximo de velocidade permitido para veículos ligeiros de passageiros dentro das localidades em Moçambique, salvo sinalização especial em contrário?',
    options: [
      '40 km/h',
      '60 km/h',
      '80 km/h',
      '100 km/h'
    ],
    correctIndex: 1,
    explanation: 'A velocidade máxima geral dentro das povoações e localidades para automóveis ligeiros de passageiros sem reboque é de 60 km/h, devendo ser ainda mais reduzida nas proximidades de escolas e hospitais.',
    trapAlert: 'Não confunda o limite geral de 60 km/h com o limite especial de 40 km/h que é frequentemente imposto por sinais junto a escolas ou mercados.',
    diagramSvgType: 'sinal_prioridade'
  },
  {
    id: 'q5',
    category: 'regras',
    categoryLabel: 'Ultrapassagens & Proibições',
    codeReference: 'Código da Estrada de Moçambique - Art. 38º',
    question: 'Em qual destas situações a manobra de ultrapassagem é expressamente PROIBIDA pelo Código da Estrada?',
    options: [
      'Nas curvas e lombas de visibilidade reduzida, quando para isso seja necessário utilizar a faixa de rodagem destinada ao sentido oposto',
      'Em qualquer via com mais de duas faixas no mesmo sentido',
      'Apenas nos dias de chuva torrencial após as 18 horas',
      'Sempre que o veículo da frente estiver a andar a menos de 30 km/h'
    ],
    correctIndex: 0,
    explanation: 'É proibido ultrapassar em lombas, curvas e passagens de nível de visibilidade insuficiente se tiver de pisar ou invadir a via de sentido contrário. Se existirem duas ou mais faixas no mesmo sentido sem invasão do oposto, a manobra é permitida.',
    trapAlert: 'O exame costuma colocar a pegadinha: "se tiver duas vias no mesmo sentido é proibido?". Cuidado: é proibido apenas se precisar invadir o sentido contrário!',
    diagramSvgType: 'ultrapassagem'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b4',
    iconName: 'Smartphone',
    title: '100% Otimizado para Telemóvel (Funciona Sem Internet)',
    subtitle: 'Estude no chapa, em casa ou no trabalho sem gastar megas',
    description: 'Um ficheiro PDF super leve e formatado perfeitamente para o ecrã do seu telemóvel. Baixe uma única vez e estude sempre que tiver 10 minutos livres.',
    tag: 'Economiza Megas',
    image: inatroExamImage
  }
];

export const REVIEWS: StudentReview[] = [
  {
    id: 'r1',
    name: 'Edson Macamo',
    city: 'Maputo',
    drivingSchool: 'Escola de Condução do Zimpeto',
    score: '20/20 no Teórico',
    quote: 'Eu estava com muito receio porque trabalho o dia todo e quase não tinha tempo para frequentar todas as aulas teóricas. Estudava este material no chapa a caminho da baixa. Fiz o teste no INATRO e saiu exatamente 8 questões iguais com as mesmas figuras! Passei à primeira.',
    verifiedDate: 'Há 5 dias',
    image: edsonPhoto
  },
  {
    id: 'r2',
    name: 'Tânia Sitoe',
    city: 'Matola',
    drivingSchool: 'Escola de Condução Matola-Gare',
    score: '19/20 Aprovada',
    quote: 'Chumbei na primeira vez com 13 respostas certas por causa de perguntas de cruzamentos. Uma colega indicou este guia de 197 MT. A explicação das prioridades é tão simples que finalmente entendi a lógica. Valeu cada centavo.',
    verifiedDate: 'Há 1 semana',
    image: taniaPhoto
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Como faço para pagar e como vou receber o material?',
    answer: 'O pagamento é 100% seguro e moçambicano: você pode pagar via M-Pesa ou e-Mola (197 MT). Imediatamente após a confirmação, o link de download direto abre no seu ecrã.'
  },
  {
    id: 'f2',
    question: 'O material serve para a minha categoria de carta (Ligeiros / Pesados / Motos)?',
    answer: 'Sim! Cobre a base teórica geral comum a todas as categorias (Código da Estrada, sinais, prioridades, manobras, velocidades e primeiros socorros) com foco especial na Categoria B (Ligeiros) e Categoria C (Pesados), que são os exames mais solicitados no INATRO.'
  },
  {
    id: 'f3',
    question: 'As perguntas são realmente parecidas com as do exame do INATRO?',
    answer: 'Não são apenas parecidas: as questões foram compiladas a partir de provas reais e do banco oficial de testes do Código de Trânsito de Moçambique. O vocabulário, o formato de múltipla escolha e as pegadinhas são exatamente os mesmos que você verá no monitor da sala de exame.'
  },
  {
    id: 'f4',
    question: 'Preciso de internet para estudar ou gasta muitos megas?',
    answer: 'Não! O guia foi desenhado em formato PDF digital leve. Você descarrega uma única vez e pode abrir no seu telemóvel, tablet ou computador sempre que quiser, mesmo quando estiver completamente sem saldo de dados ou offline.'
  },
  {
    id: 'f6',
    question: 'Eu não percebo muito de código e tenho medo de chumbar. Isso vai me ajudar?',
    answer: 'Com certeza! O material foi feito especialmente a pensar em quem acha o livro da escola de condução confuso e cansativo. Em vez de ler artigos de leis difíceis, você aprende na prática: pergunta real + resposta certa + explicação clara em português simples do dia a dia.'
  }
];
