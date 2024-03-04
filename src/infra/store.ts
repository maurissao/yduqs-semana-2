import { LocalStorage } from 'node-localstorage';
export class Store {
    #storeName: string = 'pro-books';
    #storage: LocalStorage;
    #data: Object;
    private static instance: Store;
    constructor() {
        this.#storage = new LocalStorage(this.#storeName);
        this.LoadData();
    }

    public static get Instance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return this.instance;
    }

    public LoadData(): void {
        this.#data = JSON.parse(this.#storage.getItem('data')) || {};
    }

    public SaveData(): void {
        this.#storage.setItem('data', JSON.stringify(this.#data));
    }

    public get data(): object {
        return this.#data;
    }
}
