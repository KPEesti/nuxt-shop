import {defineStore} from "pinia";
import Product from "~/models/Product";
import {$fetch} from "ofetch";

interface State {
    list: Product[]
}

export const useCartStore = defineStore('cart', {
    state: (): State => ({
        list: [],
    }),
    getters: {
        sumPrice(state): number {
            let sum = 0;
            state.list.forEach(item => sum += item.price);
            return sum;
        }
    },
    actions: {
        async getCart() {
            this.list = await $fetch<Product[]>("http://localhost:5000/cart");
        },
        async addToCart(product: Product) {
            this.list.push(product);
            await $fetch("http://localhost:5000/cart", {
                method: "POST",
                body: product
            }).catch(e => console.log(e))
        },
        async deleteProduct(id: number) {
            this.list = this.list.filter((product) => product.id !== id);
            await $fetch(`http://localhost:5000/cart/${id}`, {
                method: "DELETE"
            }).catch(e => console.log(e));
        },
        changeProductCount(id: number, delta: number) {
            this.list = this.list.map((product) => {
                if (product.id === id) {
                    return {...product, quantity: (product.quantity + delta)};
                }
                return product;
            })
        }
    }
})
