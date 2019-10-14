# ToolsBackend
Api Tools para a aplicação Vuttr (BossBox):
 - Criação/Atualização de usuários;
 - Autenticação com JWT;
 - Cadastro, exclusão de ferramentas (Tools);
 - Listagem das ferramentas com filtro por tags;

### Requerimentos 

PostgreSQL(Database):
 - https://www.postgresql.org/
 
Docker versão 19.03.1 (Container):
- Mac: 
  https://docs.docker.com/docker-for-mac/install/
- Linux:
  https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Windows:
  https://docs.docker.com/docker-for-windows/install/

Docker-compose: versão 1.24.1 (Osquestrador de containers):
- Mac: 
    (Instalado junto com o docker Desktop)
 - Linux:
    https://docs.docker.com/compose/install/
 - Windows:
    https://docs.docker.com/compose/install/

Node (versão 12.1.0):
- https://nodejs.org/en

Yarn (versão 1.13.0): 
- https://yarnpkg.com/lang/en/

### Instalação do projeto

    $ git clone https://github.com/jinascimento/gobarber_api.git
    $ cd vuttr_backend
    $ yarn install

### Configure as variações de ambiente no arquivo '.env'

    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_DB=vuttr_development
    POSTGRES_HOST=
    BCRYPT_SALT=8
    JWT_SECRET=a372193bcbea90063c995cb8aaafd9ba


### Execute o docker-compose
    $ docker-compose up -d
### Start & watch
    $ yarn dev

## [Swagger Documentação](https://app.swaggerhub.com/apis-docs/jhonatan/vuttr/1.0.0)




