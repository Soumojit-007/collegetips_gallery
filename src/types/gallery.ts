
export interface Photo {
  id: string;
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
}
