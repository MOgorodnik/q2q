import { defineStore } from 'pinia';
import axios from 'axios';

const host = 'https://dummyjson.com';
const limit = 3;

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    loading: true,
    sortAscending: true,
    error: null as string | null,
    errorProbability: 0.3, // 30% chance of error
  }),
  actions: {
    async getAllProducts(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<ProductResponse>(
          `${host}/products?limit=${limit}&skip=${(page - 1) * limit}`
        );
        this.products = response.data.products;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.error = 'Failed to fetch products';
      } finally {
        this.loading = false;
      }
    },
    addProduct(product: Product): void {
      if (Math.random() < this.errorProbability) {
        throw new Error('Simulated error while adding product');
      }

      try {
        const newProduct = {
          ...product,
          id: Date.now() // Use timestamp as a simple unique ID
        };
        // Here we might want to add an API call to actually add the product
        this.products.push(newProduct);
      } catch (error) {
        console.error('Error adding product:', error);
        this.error = 'Failed to add product';
        throw error; // Re-throw the error to be caught by the component
      }
    },
    removeProduct(productId: number): void {
      if (Math.random() < this.errorProbability) {
        throw new Error('Simulated error while removing product');
      }

      try {
        // Here we might want to add an API call to actually remove the product
        this.products = this.products.filter(
          (product) => product.id !== productId
        );
      } catch (error) {
        console.error('Error removing product:', error);
        this.error = 'Failed to remove product';
        throw error; // Re-throw the error to be caught by the component
      }
    },
    setSortOrder(ascending: boolean): void {
      this.sortAscending = ascending;
    },
  },
  getters: {
    sortedProducts: (state) => {
      return [...state.products].sort((a, b) =>
        state.sortAscending ? a.price - b.price : b.price - a.price
      );
    },
  },
});
