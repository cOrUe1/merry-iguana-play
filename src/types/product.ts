export interface Product {
  id: string; // Added unique ID for each product
  coverPhoto: string;
  title: string;
  description: string;
  additionalPhotos: string[];
}