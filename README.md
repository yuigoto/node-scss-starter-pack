Node.JS : SCSS Starter Pack
===========================

> Este é um starter pack para projetos contendo apenas **SCSS** e arquivos HTML, feito como introdução ao uso de **Node.js** como ferramenta de desenvolvimento e testes locais.

## Dependências

Para usar este projeto, você precisará de:
- **[Node.js][0]**, versão 6.x ou maior;
	- No momento em que escrevo este projeto, a versão que recomendo é a **6.11.4 LTS**, que é a estável de suporte long-term, mas o projeto funcionará tranquilamente na versão mais recente;

Tendo o Node instalado, abra uma janela do Prompt de Comando ou Terminal e verifique a versão do Node e do NPM, o package manager do Node, usando os seguintes comandos:
- `node -v` 
- `npm -v`

O resultado será similar à este:
```
C:\Users\[user]>node -v
v6.11.3

C:\Users\[user]>npm -v
3.10.10
```

## Estrutura do projeto

O projeto tem uma estrutura de pastas e arquivos específica, que deve ser respeitada para que o projeto seja montado corretamente.

Por padrão, esta estrutura contém:
- **`src/`** é a pasta aonde deverão ser criados e salvos os arquivos SCSS;  
- **`static/`** é a pasta aonde deverão ser criados e salvos os arquivos estáticos, por enquanto apenas HTML;
- **`assets/`** armazena imagens e arquivos como fontes, que são recursos utilizados pelo CSS ou JavaScript das páginas;
- **`index.js`** é o arquivo JavaScript utilizado pelo Express para servir o projeto localmente, não precisa alterar nada nele por enquanto;
- **`nodemon.json`** arquivo de configuração do Nodemon, responsável por observar alterações no projeto;
- **`package.json`** é o arquivo contendo informações do projeto e dependências, é utilizado pelo NPM para verificar pacotes de dependências utilizados pelo projeto, **NÃO** altere este arquivo na mão, a não ser que saiba o que está fazendo;
- **`README.md`** e **`LICENSE.md`**, que são o README e a licença do projeto;

Normalmente, quando este projeto é executado, os arquivos em `static/` são todos copiados para uma nova pasta `public/`, o mesmo vale para o conteúdo da pasta `assets/`.

Após a cópia dos arquivos, o Node compila os arquivos SCSS em `src/` em um CSS e coloca este arquivo dentro da pasta `assets/css/`, dentro de `public/`.

Não precisa criar a pasta `public/`, pois a mesma é criada _automaticamente_ ao executar o projeto.

## Executando

Instalou, checou versões do Node e NPM, e deu tudo certo? Ótimo! Agora você deverá clonar este repositório, abrir uma janela de comando, navegar até a pasta deste projeto e usar o comando `npm install`. Este comando instala os pacotes de dependências do projeto que estão no NPM, como:
- `node-sass`: compilador de arquivos SCSS;
- `express`: framework para desenvolvimento de projetos usando o Node, que também pode ser usado para servir um website localmente;

Lembrando uma coisa: estas não são todas as dependências instaladas, ok? ;) Após pegar o jeito, recomendo que leia um pouco sobre NPM e os outros pacotes, e como funciona o Node, de forma geral. :D

Com as dependências instaladas, tudo o que você precisa para desenvolver o projeto é escrever nos arquivos SCSS em `src` e, no prompt de comando, digitar o comando: `npm run build`.

O comando build é um script do projeto, que copia o conteúdo em `static/` e `assets/` para dentro de `public/`, assim como compila os SCSS em `src/` e posiciona o output (`site.css`) dentro de `public/assets/css/`.

Isso, porém, executa o projeto apenas uma vez. Durante o desenvolvimento, é importante que consiga testar o projeto e que o projeto atualize este projeto automaticamente.

Execute, então, o comando `npm run start`, dentro desta pasta.

Este comando, além de "montar" o projeto, aciona um observador, que atualiza/copia os arquivos do projeto a cada alteração realizada.

Para acessar o projeto, enquanto estiver executando, basta acessar: `http://localhost:3000` (a porta 3000 pode ser alterada, caso deseje).

Para encerrar o projeto, basta apertar `CTRL + C` no prompt de comando e confirmar quando solicitado. Isto é necessário, pois fechar a janela de comando **não** encerra o Node!

## Autores

- **Fabio Y. Goto** ([lab@yuiti.com.br][mailto01]);

## Licença

Este projeto está licenciado sob a `licença MIT`. Você poder ver mais detalhes lendo o arquivo `LICENSE.md`.

-----

_© 2017 Fabio Y. Goto_

[\\]: ======================================================================

[mailto01]: mailto:lab@yuiti.com.br

[\\]: ======================================================================