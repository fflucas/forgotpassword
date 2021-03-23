<h1 align="center">Reset Password</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/fflucas/forgotpassword?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/fflucas/forgotpassword?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/fflucas/forgotpassword?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/fflucas/forgotpassword?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/fflucas/forgotpassword?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/fflucas/forgotpassword?color=56BEB8" /> -->

  <img alt="Github stars" src="https://img.shields.io/github/stars/fflucas/forgotpassword?color=56BEB8">
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  forgotpassword 🚀 Em construção...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-pré-requesitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="#memo-licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/fflucas" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre

O projeto Reset Password é uma adaptação do projeto original de [Eze Sunday](https://github.com/ezesundayeze/forgotpassword) o qual desenvolve uma metodologia segura para recuperação de senha através do uso de email e token de recuperação. O projeto foi adaptado e reescrito em TypeScript com uso do serviço de email Amazon Simple Email Service (SES).

O fluxo para recuperação de senha é descrito abaixo:
![Sample](reset-password.png "Workflow")

<center><font size=2><a href="https://blog.logrocket.com/implementing-a-secure-password-reset-in-node-js/">Créditos: Implementing a secure password reset in Node.js por Eze Sunday</a></font></center>

## :sparkles: Funcionalidades

:heavy_check_mark: Cadastro de usuário;\
:heavy_check_mark: Solicitação de recuperação de senha;\
:heavy_check_mark: Geração de token para recuperação e envio de email;\
:heavy_check_mark: Validação do token;\
:heavy_check_mark: Cadastro de nova senha;\
:heavy_check_mark: Envio de email com confirmação.

## :rocket: Tecnologias

Algumas das ferramentas usadas na construção do projeto:

- [Node.js](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

## :white_check_mark: Pré requisitos

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com), o [Node](https://nodejs.org/pt-br/) e o [Docker Compose](https://docs.docker.com/compose/) instalados em sua maquina.

## :checkered_flag: Começando

```bash
# Clone este repositório
$ git clone https://github.com/fflucas/forgotpassword

# Entre na pasta
$ cd forgotpassword

# Inicie o container do banco de dados
$ docker-compose up

# O container vai inicializar em <http://localhost:3306>

# Instale as dependências
$ yarn install

# Execute as migrations
$ yarn migration:run

# Para iniciar o projeto
$ yarn start

# O app vai inicializar em <http://localhost:3000>
```

## :memo: Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com :heart: por <a href="https://github.com/fflucas" target="_blank">Fábio L.</a>

&#xa0;

<a href="#top">Voltar para o topo</a>
