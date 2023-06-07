import {defineStore} from "pinia";
import Product from "~/models/Product";

interface State {
    products: Product[];
    search: string;
}

export const useCatalogStore = defineStore('catalog', {
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
        search: ''
    }),
    getters: {
        filterCart(state): Product[] {
            return state.products;
        }
    },
    actions: {
        async getCatalog() {

        },
        searchProduct(search: string) {
            return this.products.filter((item) =>
                (item.title.toLowerCase().includes(search.toLowerCase())))
        }
    }
})
