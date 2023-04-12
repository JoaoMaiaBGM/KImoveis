# KImóveis

Esse projeto tem como intuito prover um serviço back-end responsável por gerenciar uma imobiliária. Esse serviço abrange o cadastro de usuários, o cadastro de propriedades, login de usuário e o agendamento para visitas em uma propriedade.

## Tecnologias utilizadas

- NodeJs
- Express
- TypeORM
- SQLite
- pg
- Jest
- JWT
- Bcrypt

#

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```
yarn install
```

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

```
yarn --version
```

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

```
npm install --global yarn
```

<br>

Esse projeto já está com o Docker configurado, basta preencher as variáveis de ambiente no .env

Basta buildar e subir os containers usando o comando padrão:

```
docker-compose up --build
```

ou

```
docker compose up --build
```

O comando pode variar com a versão do docker compose instalada em sua máquina

**_ATENÇÃO:_** a porta utilizada para rodar nosso docker é a `5431`.
Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml.

<br>

# **Sobre os testes**

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

<br>

# **Rodando os testes**

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes

```
yarn test
```

#

### Rodar todos os testes e ter um log ainda mais completo

```
yarn test --all
```

#

### Rodar os testes de uma pasta específica

```
yarn test ./scr/__tests__/integration/<subpasta>
```

#

### Rodar os testes de um arquivo específico

```
yarn test ./scr/__tests__/integration/<subpasta>/<arquivo>
```

#

### Rodar um teste específico

```
yarn test -t <describe ou test específico envolto em aspas>
```

```
\\ ex: yarn test -t "/categories"
\\ rodaria os testes do describe "/categorias" no caminho
\\ ./scr/__tests__/integration/categories/categoriesRoutes.test.ts
```

<br>

**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.

#
