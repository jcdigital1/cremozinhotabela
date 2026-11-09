export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  priceRaw?: number;
  isStartingPrice?: boolean; // "a partir de R$ ..."
  isRangePrice?: boolean; // "de R$ ... a R$ ..."
  isEvaluation?: boolean; // "(sob avaliação)" or "(sob avaliação, dependendo do veículo)"
  evaluationNote?: string;
  isCompletePackage?: boolean; // for subtle distinction of complete packages
  category: string;
  subgroup?: string;
}

export interface ServiceCategory {
  id: string;
  anchor: string;
  name: string;
  subtitle?: string;
  image: string;
  services: ServiceItem[];
}

export interface AdditionalGroup {
  id: string;
  title: string;
  services: ServiceItem[];
}

export interface AudioState {
  isPlaying: boolean;
  hasInteracted: boolean;
  duration: number;
  currentTime: number;
  isMuted: boolean;
  volume: number;
  error: string | null;
  autoplayBlocked: boolean;
}
