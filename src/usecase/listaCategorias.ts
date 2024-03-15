import { CategoriaRepository } from "../infra/repositories/categoria/categoria.repository";

export function listaCategorias() {
    const categoriaRepository = new CategoriaRepository();
    const categorias: any[] = categoriaRepository.getall();
    if (categorias != undefined) {
        categorias.map((e, i ,a) => {
            console.log(e.id, e.descricao);
        });
    }
}