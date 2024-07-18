import { defineStore } from 'pinia';
import axios from 'axios';

const host = 'https://dummyjson.com';
const limit = 10;

// Define the Product interface
export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: string;
  stock: string;
  brand: string;
  category: string;
}

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[], // Explicitly type the products array
    loading: true,
    sortAscending: true,
  }),
  actions: {
    async getAllProducts() {
      this.loading = true;
      try {
        const response = await axios.get<{ products: Product[] }>(
          `${host}/products?limit=${limit}`
        );
        this.products = response.data.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    addProduct(product: Product): void {
      this.products.push(product); // Remove the type annotation here
    },
    removeProduct(productId: number): void {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
    setSortOrder(ascending: boolean): void {
      // New action to set sort order
      this.sortAscending = ascending;
    },
  },
});
