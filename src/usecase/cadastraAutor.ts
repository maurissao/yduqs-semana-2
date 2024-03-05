import { AutorRepository } from "../infra/repositories/autor/autorRepostiory";
import { Autor } from "../model/autor";
export function cadastraAutor() {
    const autores = new AutorRepository();
    const autor = new Autor();
    autor.nome = 'guimarães rosa';
    autor.email = 'g.rosa@gmail.com';
    autor.biografia = 'o texto deve ter mais de 10 caracteres ';
    autor.dataCadastro = new Date();
    autores.insert(autor);
}