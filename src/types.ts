export interface ExamQuestion {
  id: string;
  category: 'prioridade' | 'sinais' | 'regras' | 'cruzamentos';
  categoryLabel: string;
  codeReference: string; // e.g. "Artigo 31º do Código de Estrada"
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  trapAlert: string; // The typical INATRO trick/trap
  diagramSvgType?: 'cruzamento' | 'rotunda' | 'sinal_stop' | 'sinal_prioridade' | 'ultrapassagem';
}

export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  image?: string;
}

export interface StudentReview {
  id: string;
  name: string;
  city: string;
  drivingSchool: string;
  score: string;
  quote: string;
  verifiedDate: string;
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
