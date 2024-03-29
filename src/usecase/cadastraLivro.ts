import { DateEx } from "../types/dateEx";
import { LivroRepository } from "../infra/repositories/livro/livro.repository";
import { Livro } from "../model/livro";

export async function cadastraLivro() {
    const livros = new LivroRepository();
    const livro = new Livro();    
    livro.nome = 'A revolução dos bichos: Um conto de fadas';
    livro.ISBN = '978-8535909555';
    livro.categoria = '0bec0268-b9a0-407f-9ae1-0ace12eea83c';
    livro.paginas = 152;
    livro.preco = 9.98;
    livro.resumo = `Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista.
    De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética.
    Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. O próprio Orwell, adepto do socialismo e inimigo de qualquer forma de manipulação política, sentiu-se incomodado com a utilização de sua fábula como panfleto.
    Depois das profundas transformações políticas que mudaram a fisionomia do planeta nas últimas décadas, a pequena obra-prima de Orwell pode ser vista sem o viés ideológico reducionista. Mais de sessenta anos depois de escrita, ela mantém o viço e o brilho de uma alegoria perene sobre as fraquezas humanas que levam à corrosão dos grandes projetos de revolução política. É irônico que o escritor, para fazer esse retrato cruel da humanidade, tenha recorrido aos animais como personagens. De certo modo, a inteligência política que humaniza seus bichos é a mesma que animaliza os homens.
    Escrito com perfeito domínio da narrativa, atenção às minúcias e extraordinária capacidade de criação de personagens e situações, A revolução dos bichos combina de maneira feliz duas ricas tradições literárias: a das fábulas morais, que remontam a Esopo, e a da sátira política, que teve talvez em Jonathan Swift seu representante máximo.`;
    livro.sumario = `Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos`;
    livro.dataPublicacao = new DateEx().Add(0);
    livro.autor = 'cb44a042-e6e6-4e36-920e-91254bb6cdb6';
    await livros.insert(livro);
}