# Trybe-Futebol-Clube

Neste projeto Back-End (Front-End foi realizado pela <a href="https://www.betrybe.com/" target="_blank">Trybe</a>) foi desenvolvido um site informativo sobre partidas e classificações de futebol:

-----

# Habilidades

O projeto foi realizado com o intuito de desenvolver e aperfeiçoar as habilidades do Back-End. Para isto, foram desenvolvidos:
- Uma API (utilizando o método TDD) e também a integração - através do docker-compose - das aplicações para que elas funcionem consumindo um banco de dados;
- Back-end dockerizado utilizando modelagem de dados através do Sequelize capaz de ser consumida por um front-end já provido;
- Criptografia de senhas.

-----

# Instalação

Para instalar as dependências, execute o seguinte comando no terminal dentro da pasta raiz:

`npm install`

Configurações mínimas para execução do projeto:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

-----

# Uso

Comando para popular o banco de dados (na pasta Back-End):
`npm run db:reset`

Para iniciar o projeto, execute o seguinte comando no terminal na pasta raiz:

`npm run compose:up`

Isso iniciará a aplicação. Abra http://localhost:3000 para visualizá-la no navegador.

As portas usadas para o Front-End e Back-End são, respectivamente, 3000 e 3001.

-----

# Contribuindo

Etapas a seguir para contribuir com o projeto:

- Realizar o fork do repositório;

- Criar uma branch: git checkout -b (minha-contribuicao);

- Fazer as mudanças desejadas e commit: git commit -m "(Minha contribuição)";

- Enviar para a sua branch: git push origin (minha-contribuicao);

- Abrir um pull request no repositório original.

-----

# Autor

A parte de Back-End do projeto TFC foi desenvolvido por João Felipe Dobrowolski durante o curso da <a href="https://www.betrybe.com/" target="_blank">Trybe</a>.
