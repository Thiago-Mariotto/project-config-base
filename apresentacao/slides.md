---
theme: "night"
transition: "slide"
title: "Configuração de projetos"
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: "monokai"
progressBar: true
---

## Boas vindas

--

## Muito obrigado pela presença!

![tks](https://media0.giphy.com/media/Tk1RH495RjYYM/giphy.gif)

--

### O que vamos abordar?

![pensando](https://gifburg.com/images/gifs/thinking/gifs/0002.gif){width=70%}

--

### O que vamos abordar?

- VsCode config
- Commits
- ESLint
- Github Actions
- Docker

---

### Porque esse tema é importante?

> É importante termos uma base sólida e estruturada para desenvolvermos nossa aplicação, definindo as configurações iniciais, é mais fácil compartilhar o código e evitar problemas futuros.

---

### Configurações do Visual Studio Code

> Pergunta: O que vem na sua cabeça com esse título?

--

### Configurações do Visual Studio Code

> Você sabia que é possível compartilhar suas configurações de projeto do VsCode com outras pessoas?

--

### Configurações do Visual Studio Code

> É importante pois, caso uma pessoa venha, por exemplo, realizar um Code Review, ela trabalhe em cima das mesmas regras que você definiu.

--

### Configurações do Visual Studio Code

> Como fazemos isso?

--

### Configurações do Visual Studio Code
```json
{
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
	"editor.formatOnSaveMode": true,
	"editor.formatOnType": true,
	"editor.tabSize": 2,
	"editor.codeActionsOnSave": {
		"source.fixAll": true,
		"source.organizeImports": true
	// ...
	}

}
```

--

### Configurações do Visual Studio Code

- dessa forma podemos compartilhar nossas configurações de ambiente de projeto com outras pessoas.
- o arquivo sobrepõe suas configurações locais.

---

### Commits

![](https://media0.giphy.com/media/487L0pNZKONFN01oHO/giphy.gif){width=40%}

--

## Padronização de commits

- Commitlint
- Husky
- Commitizen

--

### Commits Atômicos

--

### Commits Atômicos

- Submeta pequenas alterações que foram realizadas em seu código.

--

### Commits Atômicos

- Seus commits devem contar uma história, a história de desenvolvimento do seu projeto;

--

### Commits Atômicos

- Nada de commit bomba.

--

### Conventional Commits

[Documentação](https://www.conventionalcommits.org/en/v1.0.0/)

> Ele fornece um conjunto fácil de regras para criar um histórico de commit explícito descrevendo os recursos, correções e alterações feitas nas mensagens de commit.

--

### Conventional Commits

```sh
$ git commit -m "feat: insert validation user register"

$ git commit -m "fix: remove typo user validation register"
```

--

### Commitlint

[Documentação](https://commitlint.js.org/#/guides-local-setup)

> Podemos Definir que utilizaremos o Conventional Commits, mas nada garante que vamos respeitar ou lembrar as regras em todos os commits.

--

### Commitlint

> Com ele conseguimos verificar se a mensagem de commit está dentro dos padrões definidos (Linter dos commits).

--

## Commitizen

[Documentação](http://commitizen.github.io/cz-cli/)

> O Commitizen é uma biblioteca que vai nos ajudar a criar os commits seguindo o padrão do Conventional Commit. Ela gera uma interface no terminal e assim vamos conseguir acessar todos os tipos de commits e suas descrições.

--

### Husky

[Documentação](https://typicode.github.io/husky/#/)

> É possível criar gatilhos em determinadas ações, utilizaremos o Husky para disparar uma ação antes de um commit para executar o commitizen e verificar se a mensagem do commit está seguindo o padrão definido.

--

### Colocando tudo isso em prática

![](https://i.pinimg.com/originals/2a/69/13/2a6913ecabc0b8449c741a6686cae8fa.gif)

--

### Iniciando Commitlint

```sh
$ npm init -y
$ git init

# install commit lint
$ npm install --save-dev @commitlint/cli
$ npm install --save-dev @commitlint/config-conventional

# atomic commit
$ git add package.json
$ git commit -m "feat: add commit lint lib"

# Configure commitlint to use conventional config
$ echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

```

--

### Testando commitlint

```sh
# Para testar a biblioteca
echo "teste" | npx commitlint # deve apontar um erro

echo "feat: teste" | npx commitlint # deve funcionar corretamente
```

--

### Iniciando Husky

```sh
# instalando a lib
$ npm install husky -D

# atomic commit
$ git add package.json
$ git commit -m "feat: add husky lib"

# ativando os hooks (gatilhos)
$ npx husky install

# Add hook que vai disparar o commitlint
$ npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

```

--

### Iniciando Husky

```json
// para ativar os hooks automaticamente após instalação
"scripts": {
  "prepare": "husky install"
}

// caso o script não seja adicionado ao package.json, toda vez 
// que um clone for realizado é necessário realizar 
// `$ npx husky install`
```

--

### Realizando um commit

```sh
$ echo "node_modules/" > .gitignore

$ git status
$ git add .gitignore
$ git commit -m "qualquer coisa"
$ git commit -m "chore: add gitignore"
```

--

### Adicionando o Commitizen

```sh
$ npm i commitizen -D
$ npx commitizen init cz-conventional-changelog --save-dev --save-exact

$ echo "console.log(1);" > index.js
$ git add index.js

"scripts": {
    "commit": "cz"
  }

$ npm run commit
```

--

### Utilizando o Commitizen

1. Selecione o tipo de mudança que você está realizando
2. Qual é o escopo desta mudança (por exemplo, componente ou nome do arquivo)
3. Escreva uma descrição breve e imperativa da mudança (máx. 82 caracteres):

--

### Utilizando o Commitizen

4. Forneça uma descrição mais longa da mudança: 
5. Existem alterações importantes (importante saber sobre `Semantic Versioning`)
6. Essa mudança afeta algum problema em aberto? (Issues)

---

## ESLint

![](https://c.tenor.com/dNAEMPMv2YMAAAAC/ei-nerd-nao-errado.gif)

--

## O que é o ESLint?

> Analisa seu código estaticamente para encontrar problemas. Você pode executar o ESLint como parte de seu pipeline de integração contínua (CI). Os problemas encontrados pelo ESLint podem ser corrigidos automaticamente.

--

### Iniciando ESLint Backend

```sh
$ mkdir backend && cd backend
$ mv ../index.js backend

$ npm init -y
$ npm install eslint -D
$ npx eslint --init

$ git add [...]
$ npm run commit
```

--

### Executando eslint

```json
"lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."

$ npm run lint
```

---

### Github Actions

[Documentação](https://github.com/features/actions)

![](https://media.giphy.com/media/XCxcmEQWxDdc8qsd2R/giphy.gif)

--

### Github Actions

> O GitHub Actions facilita a automatização de todos os seus fluxos de trabalho de software. Crie, teste e implante seu código diretamente do GitHub.

--

### Github Actions - Continuous Integration

- Uma CI é realizada com sucesso quando novas mudanças no código são desenvolvidas, testadas e consolidadas em um repositório, por exemplo, a correção de um bug ou o deploy de uma feature nova.

--

### Github Action + ESLint

> Vamos criar uma Action para que, todas as vezes que um PR for aberto ou um push for realizado, o ESLint execute todos os testes em nosso código.

--

### Por onde começamos?

![](https://c.tenor.com/ydJSf1AnEJMAAAAC/where-looking-for.gif)

--

### Configurando minhas Actions

--

### Configurando minhas Actions

```sh
# vamos voltar para a raiz do projeto ./
$ mkdir .github/workflows/main.yml
```

--

### Configurando minhas Actions

```yml
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Install back-end modules
        run: npm i --prefix backend    

      - name: Run linter on back-end
        run: npm run lint --prefix backend
```

--

### Testando uma action

> Para isso é necessário realizar um Pull Request em um repositório.

---

### Docker

![](https://miro.medium.com/max/1400/0*bRvhcFgijNKRVD9L.gif){width=70%}

--

### Docker

> Não basta só compartilharmos nossas configurações de trabalho.

--

### Docker

> Podemos compartilhar nosso código pronto para ser executado, testado ou modificado, mas como?

--

### "Dockerizando" sua aplicação

![](https://i.pinimg.com/originals/92/33/40/923340f1c1385970b953ad2a88be83fb.gif)

--

## Dockerizando sua aplicação

> Fornecendo toda a estrutura base do projeto para que qualquer pessoa consiga executa-lo em sua máquina, continuando o desenvolvimento ou realizando testes.

--

### Case

> Pense o seguinte caso: você está participando de um processo seletivo em que precisa construir uma aplicação simulando uma loja de vendas de sapatos.

--

### Case

> É bem provável que você irá desenvolver um CRUD de vendas e ou estoque.

--

### Case

> Para desenvolver, você seleciona 3 ferramentas: Node, React e MySQL.

--

### Case

> Após finalizado, como ficaria sua aplicação para ser enviada a pessoa avaliadora? Conte-me ...

--

### Case

> Agora, imagine que: a pessoa que irá testar sua aplicação trabalha com Python, não possuí node e nem MySQL instalado na máquina :/

--

> Ela vai ter um trabalhão não é mesmo? 

--

## Mão ~~na massa~~ no teclado

![](https://i.pinimg.com/originals/9d/f1/38/9df13818441fc507a42a5e50c082f062.gif)

--

### Utilizando Docker

> Vamos trabalhar com um exemplo parecido

--

### Utilizando Docker

> Vamos imaginar que estamos desenvolvendo uma aplicação completa (front e back), utilizando as seguintes ferramentas:

--

### Nossas ferramentas

- API com Node rodando na versão 12.22;
- Aplicação WEB com REACT e node na versão 12.22;
- Banco de dados MySQL na versão 5.7;

--

### Colocando em prática

1. Criar o Dockerfile do Backend
2. Criar o Dockerfile do Frontend
3. Criar o Docker Compose
	1. Serviço do Back utilizando o Dockerfile
	2. Serviço do Front utilizando o Dockerfile
	3. Serviço MySQL sendo populado com um banco de dados

--

### Colocando em prática

> Ponto de atenção: o container do Frontend é dependente do container do Backend e o Backend por sua vez é dependente do MySQL.

--

## Let's Code

--

### Dockerfile Frontend

```yml
FROM node:12.22-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chmod 777 node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

--

### Dockerfile Backend

```yml
FROM node:12.22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chmod 777 node_modules

COPY . .

EXPOSE 3333

CMD ["npm", "start"]
```

--

### Docker compose

```yml
version: '3.1'

services:
  database:
    image: mysql:5.7
    restart: always
    container_name: mysql_compose
    ports:
      - 3306:3306
    environment:
      - MYSQL_ROOT_PASSWORD=docker
    volumes:
      - ./backend/database/mysql-seeder:/docker-entrypoint-initdb.d

  api:
    build: ./backend
    container_name: backend_compose
    ports:
      - 3333:3333
    depends_on:
      - database
    volumes:
      - /app/node_modules
      - ./backend:/app

  web:
    build: ./frontend
    container_name: frontend_compose
    ports:
      - 3000:3000
    volumes:
      - /app/node_modules
      - ./frontend:/app
    depends_on:
      - api
```


--

> Agora nossa pessoa avaliadora poderá testar nosso código executando somente um comando.

---