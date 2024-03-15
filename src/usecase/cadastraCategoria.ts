import { Categoria } from "../model/categoria";
import { CategoriaRepository } from "../infra/repositories/categoria/categoria.repository";

export async function cadastraCategoria() {
    const categoriaRepository  = new CategoriaRepository();
    const categoria  = new Categoria();
    categoria.descricao = 'Política';
    await categoriaRepository.insert(categoria);
}