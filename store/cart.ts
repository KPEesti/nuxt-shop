import {defineStore} from "pinia";
import Product from "~/models/Product";
import {$fetch} from "ofetch";

interface State {
    products: Product[]
}

export const useCartStore = defineStore('cart', {
    state: (): State => ({
        products: [
            {
                id: 1,
                images: [
                    '/img/1.1.jpg'
                ],
                title: "Моно-серьга Звезда",
                description: "В ассортименте наших изделий — новая звёздочка — моно-серьга со звездой. Она логично дополнит комплект из подвески и браслета или станет самостоятельным ярким акцентом.",
                features: [
                    "Высота серьги (конго + подвеска): 31 мм.",
                    "Материал: Серебро 925.",
                    "Покрытие: Родий.",
                    "Вставка: Оникс.",
                ],
                price: 10800,
                quantity: 1,
            },
            {
                id: 2,
                images: [
                    '/img/2.1.jpg',
                    '/img/2.2.jpg',
                ],
                title: "Печатка с перламутром",
                description: "Такого кольца у вас ещё не было!\n" +
                    "Это портал. Мы видим в нем глубину и переменчивость неба, гладь зеркала в ожидании отражения, безусловную бесконечность вариантов.\n" +
                    "А что видите вы?",
                features: [
                    "Ширина: 12 мм.",
                    "Материал: Серебро 925.",
                    "Покрытие: Родий.",
                    "Вставка: Перламутр.",
                ],
                price: 13100,
                quantity: 1,
            },
        ],
    }),
    getters: {
        sumPrice(state): number {
            let sum = 0;
            state.products.forEach(item => sum += item.price);
            return sum;
        }
    },
    actions: {
        async getCart() {
            const products = await $fetch<Product[]>('');
            this.products = products;
        },
        addToCart(product: Product) {
            this.products.push(product);
        },
        deleteProduct(id: number) {
            this.products = this.products.filter((product) => product.id !== id);
        },
        changeProductCount(id: number, delta: number) {
            this.products = this.products.map((product) => {
                if (product.id === id) {
                    return {...product, quantity: (product.quantity + delta)};
                }
                return product;
            })
        }
    }
})
