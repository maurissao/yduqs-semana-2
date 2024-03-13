import { LocalStorage } from 'node-localstorage';

export class Store {
    #storeName: string = 'pro-books';
    #storage: LocalStorage;
    #data: Object;
    private static instance: Store;
    constructor() {
        this.#storage = new LocalStorage(this.#storeName);
    }

    public static get Instance(): Store {
        if (!Store.instance) {
            Store.instance = new Store();
        }
        return this.instance;
    }

    public GetData(key: string): any[] {
        const result: any = JSON.parse(this.#storage.getItem(key));
        return JSON.parse(this.#storage.getItem(key)) || [];
    }

    public SaveData(key: string, data: any): void {
        let state: any[] = this.GetData(key);
        state.push(data);
        this.#storage.setItem(key, JSON.stringify(state));
    }
}
