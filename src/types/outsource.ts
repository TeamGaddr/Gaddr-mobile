export interface Outsource {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  category: string;
  skills: string[];
  createdAt: string;
  updatedAt: string;
}

export interface OutsourceFormData {
  title: string;
  description: string;
  budget: number;
  deadline: string;
  category: string;
  skills: string[];
} 