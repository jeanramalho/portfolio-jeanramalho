/**
 * Profile Data Type
 * Estrutura preparada para consumir dados do backend (Supabase)
 * Facilita migração futura para dados dinâmicos
 */
export interface ProfileData {
  name: string;
  image: string;
  title: string;
  bio?: string;
}
