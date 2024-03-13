import { cadastraAutor } from "./usecase/cadastraAutor";
import { cadastraLivro } from "./usecase/cadastraLivro";
import { listaAutores } from "./usecase/listaAutores";
import { listaLivros } from "./usecase/listaLivros";

(async (exec: any) => {
    if (exec === 0) {
        await cadastraAutor();
        listaAutores();
    }

    if (exec === 1) {
        await cadastraLivro();
        listaLivros();
    }
})(1);
