import { AutorRepository } from "../infra/repositories/autor/autor.repository";
import { Autor } from "../model/autor";

export function listaAutores() {
    const autorRepository = new AutorRepository();
    const autores: any[] = autorRepository.getall();
    if (autores != undefined) {
        autores.map((e, i ,a) => {
            console.log(e.nome, e.dataCadastro);
        });
    }
}