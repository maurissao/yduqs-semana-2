import { AutorRepository } from "../infra/repositories/autor/autorRepostiory";
import { Autor } from "../model/autor";
export function cadastraAutor() {
    const autores = new AutorRepository();
    const autor = new Autor();
    autor.nome = '';
    autor.email = 'teste1@gmail .com';
    autor.biografia = 'os testes ';
    autor.dataCadastro = new Date();
    autores.insert(autor);
}