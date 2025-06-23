export interface Product {
  coverPhoto: string;
  title: string;
  description: string;
  additionalPhotos: string[];
  category: string; // Added category for filtering
}