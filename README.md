# Projeto In Orbit 

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
$ npm i dayjs
$ npm i fastify-type-provider-zod
```

# Configuracoes 
### no arquivo tsconfig.json - acesse o site (tsconfig base)
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

### no arquivo package.json, edite o script do arquivo 
    
```
    "scripts": {
        "dev": "tsx --env-file .env watch src/http/server.ts"
    },
```


# Database 

## Seed: O arquivo Seed é responsável por inserir dados iniciais no banco de dados, como usuários, categorias, produtos, etc. Isso ajuda a criar um ambiente de desenvolvimento mais realista e facilita a testagem e depuração da aplicação por outros desenvolvedores.

```
$ touch src/db/seed.ts
```
# Play no Projeto

```
$ npm run dev
```

# Play no Docker + Postgres

```
$ docker compose up -d
```

# Play no Drizzle-kit

```
$ npx drizzle-kit generate
$ npx drizzle-kit migrate
$ npx drizzle-kit studio
```

# Postman 
### primeira rota (CreateGoal)

![alt text](./assets/image.png)

# Tabela de Erros


| Tipo | issues | soluctions |
|----------|----------|----------|
| triggerUncaughtException  | app.get('pending-goals',  | app.get('/pending-goals',   |

# Snipets

![alt text](./assets/biome.png)
![alt text](./assets/comm-sql.png)

## ![logo](https://github.com/devtvas/devtvas/blob/main/assets/logo_profile.png?raw=true) Ola, meu nome é Tarcisio Valentim.
### 💻 Fullstack Developer | iOS & Android | ReactJs | NodeJs.


Eu sou desenvolvedor de software desde 2020. Desde 2018, combino meu trabalho desenvolvendo aplicativos com a criação de conteúdo educacional sobre programação.

Pode encontrarnos em:


<div style="display: flex; justify-content: center;">

<a class="social" href="mailto:tarcisio.word@gmail.com" alt="Gmail" >
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-DO-SEU-EMAIL" />
</a>

<a class="social" href="https://www.linkedin.com/in/devtvas/" alt="Linkedin" >
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN" />
</a>

<a class="social" href="https://api.whatsapp.com/send?phone=5562998025403" alt="WhatsApp" >
  <img src="https://img.shields.io/badge/-WhatsApp-25d366?style=&labelColor=25d366&logo=whatsapp&logoColor=white&link=API-DO-SEU-WHATSAPP"/>
</a>

</div>

> ##### Se consideras o conteúdo útil, apoia-o dando "★ Star" no repositório. Obrigado!