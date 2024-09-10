# node_nwl_in-orbit

# Dependencias
```
$ npm init -y
$ npm i typescript -D
$ npx tsc --init
$ npm i @types/node -tsx -D
$ npm i fastify
$ npm i drizzle-orm
$ npm i drizzle-kit -D
$ npm i zod
$ npm i postgres
$ npm i @paralleldrive/cuid2
```

 # Cole no arquivo tsconfig.json - acesse o site (tsconfig base)
```
    {
        "$schema": "https://json.schemastore.org/tsconfig",
        "_version": "20.1.0",

        "compilerOptions": {
            "lib": ["es2023"],
            "module": "node16",
            "target": "es2022",

            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "moduleResolution": "node16"
        }
    }
```

# Edite o script do arquivo package.json
    
```
    "scripts": {
        "dev": "tsx --env-file .env watch src/http/server.ts"
    },
```
# Execute o Projeto

```
    $ npm run dev
```

# Execute o Container com Docker + Postgres

```
$ docker compose up -d
```

# Crie um arquivo Seed 
## Objetivo: O arquivo Seed é responsável por inserir dados iniciais no banco de dados, como usuários, categorias, produtos, etc. Isso ajuda a criar um ambiente de desenvolvimento mais realista e facilita a testagem e depuração da aplicação por outros desenvolvedores.

```
$ touch src/db/seed.ts
```

# Execute o Drizzle-kit

```
$ npx drizzle-kit generate
$ npx drizzle-kit migrate
$ npx drizzle-kit studio
```

video aula 01 - 41min