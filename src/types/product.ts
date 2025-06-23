export interface Product {
  id: string; // Added unique ID for persistence
  coverPhoto: string;
  title: string;
  description: string;
  additionalPhotos: string[];
}