import { LivroRepository } from "../infra/repositories/livro/livro.repository";
export function listaLivros() {
    const livroRepository = new LivroRepository();
    const livros: any[] = livroRepository.getall();
    // console.log(livros);
    if (livros != undefined) {
        livros.map((e, i ,a) => {
            console.log(e.nome, e.dataPublicacao);
        });
    }
}