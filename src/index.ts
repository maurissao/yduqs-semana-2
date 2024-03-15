import { cadastraAutor } from "./usecase/cadastraAutor";
import { cadastraLivro } from "./usecase/cadastraLivro";
import { listaAutores } from "./usecase/listaAutores";
import { listaLivros } from "./usecase/listaLivros";
import { cadastraCategoria } from "./usecase/cadastraCategoria"
import { listaCategorias } from "./usecase/listaCategorias"

(async () => {
    const uc: string = process.argv[2];

    if (uc == 'autor') {
        await cadastraAutor();
        listaAutores();
    }

    if (uc == 'livro') {
        await cadastraLivro();
        listaLivros();
    }

    if (uc == 'cat') {
        await cadastraCategoria();
        listaCategorias();
    }
    
})();
