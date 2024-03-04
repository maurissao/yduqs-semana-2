import { AutorRepository } from "./infra/repositories/autor/autorRepostiory";
import { Autor } from "./model/autor";

 const autores = new AutorRepository();
// const autor = new Autor();
// autor.nome = 'teste1';
// autor.email = 'teste1@gmail.com';
// autor.biografia = 'asdfasdfasdfasd asdfasdfasf';
// autor.dataCadastro = null;
// autores.insert(autor);

autores.getall();