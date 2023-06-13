import {defineStore} from "pinia";
import Product from "~/models/Product";
import {useAppStore} from "~/store/app";
import {AppStatus} from "~/utils/consts";

interface State {
    products: Product[];
    search: string;
}

export const useCatalogStore = defineStore('catalog', {
    state: (): State => ({
        products: [],
        search: ''
    }),
    getters: {
        getProducts(state) {
            return state.products;
        },
        filterCart(state): Product[] {
            return state.products;
        }
    },
    actions: {
        async getCatalog() {
            const appStore = useAppStore();
            appStore.setAppStatus(AppStatus.LOADING);
            this.products = await $fetch<Product[]>("http://localhost:5000/products");
            appStore.setAppStatus(AppStatus.OK);
        },
        searchProduct(search: string) {
            return this.products.filter((item) =>
                (item.title.toLowerCase().includes(search.toLowerCase())))
        }
    }
})
