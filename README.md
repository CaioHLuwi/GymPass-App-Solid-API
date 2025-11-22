# GymPass Style App

## Aplicativo de gerenciamento de academias e check-ins inspirado no GymPass.
Problem

Muitos usuários querem flexibilidade para treinar em diferentes academias e registrar sua presença de forma ágil e segura, sem depender de sistemas fragmentados e sem padronização.
Solution

Este app centraliza o cadastro de academias, check-ins geolocalizados e a gestão do acesso de usuários e administradores, promovendo uma experiência simples, segura e escalável para frequentadores e gestores.
### MVP features

  - Cadastro de usuário e autenticação via JWT

  - Consulta ao perfil e histórico de check-ins

  - Registro e busca de academias

  - Check-in geolocalizado (com restrições de distância)

  - Validação de check-in apenas por administradores

  - Paginação de resultados de listas

  - Proteção de rotas para diferentes perfis de usuário (admin/comum)

  - Persistência dos dados com PostgreSQL

### Tech stack

    Backend: Node.js, TypeScript, Express

    Banco de dados: PostgreSQL

    ORM: Prisma

    Autenticação: JWT (Json Web Token)

    Testes: [Vitest, Supertest]

    CI/CD: [GitHub Actions]

### Setup steps

Em breve esta seção será atualizada com detalhes!

```bash
# Instale as dependências
npm install

# Crie o banco e rode as migrações
npx prisma migrate dev

# Suba o serviço do PostgreSQL no Docker
docker compose up

# Execute a aplicação
npm run dev
```

Configure as variáveis de ambiente no .env seguindo o modelo .env.example.
### CI e Qualidade de Projeto

Este projeto conta com integração contínua automatizada (CI):

    Testes unitários são executados a cada push para garantir a qualidade do código.

    Testes End to End (E2E) rodam automaticamente em cada pull request, validando o funcionamento completo da aplicação antes do merge.

### Funcionalidades
Requisitos funcionais

  -  Cadastro, autenticação e perfil de usuário

  -  Consulta e histórico de check-ins

  -  Consultar academias próximas e por nome

  -  Realizar e validar check-ins

  -  Cadastro de academias (apenas admin)

Regras de negócio

  -  Cadastro impossibilitado com e-mail duplicado
  -  Usuário não pode realizar dois check-ins no mesmo dia
  -  Check-in só é permitido se o usuário estiver próximo da academia (até 100m)
  -  Validação de check-in limitada a até 20 minutos após criação
  -  Apenas administradores validam check-ins e cadastram academia

Requisitos não-funcionais

  -  Senha de usuário criptografada

  -  Dados persistidos em PostgreSQL

  -  Listagens paginadas (20 itens por página)

  -  Usuários autenticados por JWT