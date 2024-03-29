import { DateEx } from "../types/dateEx";
import { AutorRepository } from "../infra/repositories/autor/autor.repository";
import { Autor } from "../model/autor";
import { v4 as uuid  } from "uuid";

export async function cadastraAutor() {
    const autorRepository = new AutorRepository();
    const autor = new Autor();
    autor.nome = 'George Orwell';
    autor.email = 'georgeorwell@amazon.com';
    autor.biografia = 'o texto deve ter mais de 10 caracteres ';
    autor.dataCadastro = new DateEx().Add(-3);
    await autorRepository.insert(autor);
}