export interface Product {
  id: string; // Added unique ID for each product
  coverPhoto: string;
  title: string;
  description: string;
  additionalPhotos: string[];
  oldPrice?: number; // Optional old price
  newPrice?: number; // Optional new price
  discountPercentage?: number; // Optional discount percentage
}