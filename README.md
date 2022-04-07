# Configurações iniciais de um projeto

## Boas vindas

Este é um exemplo de como utilizar o [Docker Compose](https://docs.docker.com/compose/install/) para iniciar três aplicações containerizadas, sendo elas: 
1. [MySQL](https://www.mysql.com/)
2. [API com Node.js](https://nodejs.org/en/)
3. [SPA com React.js](https://reactjs.org/)

### Pré requisitos

Você precisa das seguintes ferramentas instaladas

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Instalação

Siga este passo a passo para testar este repositório.

Clone o repositório para sua máquina local

```
$ git clone git@github.com:Thiago-Mariotto/docker-compose-example.git
```

Acesse a pasta

```
$ cd docker-compose-example
```

Inicie a aplicação com o Docker Compose

```
$ docker-compose up --build
```
O comando acima realiza o build do arquivo `docker-compose.yml` construindo todas as imagens necessárias e inicializa todos os containers configurados.

## Como utilizar?

1. Cetifique-se de seguir todos os passos de instação.
2. Verifique se todos os containers foram iniciados.
 
```sh 
$ docker ps
```

O retorno deve conter 3 containers ativos `frontend` | `backend` | `mysql`.

### Acessando o frontend

A página do frontend deve ser renderizado no endereço `http://localhost:3000`, sua página inicial renderiza os dados retornados da api.

### Acessando o backend

A API estará sendo executada na porta 3333, é possível verificar o acesso em uma rota GET `http://localhost:3333` o retorno é um Array de pessoas instrutoras e suas frases.

### Acessando o banco de dados

O banco de dados é populado com um script que está localizado na pasta `backend/mysql-dump` quando o container é inicializado.

É possível acessa-lo pela porta `3306` do seu `localhost` ou `127.0.0.1` a senha de acesso é `docker`.

### Realizando pull request

Certifique-se de executar `npm run lint` na pasta do backend, existe uma action de validação.


## Aproveite :)
