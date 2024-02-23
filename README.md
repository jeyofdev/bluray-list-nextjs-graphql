# Bluray List Nextjs Graphql

This is a personnal project using NextJs, Apollo, Graphql, Typescript and The Movie Database (TMDB) API.</p>

### Tools

- [Nextjs](https://nextjs.org/) The React Framework for the Web.
- [React](https://react.dev/) React 18.
- [Typescript](https://www.typescriptlang.org/) JavaScript with syntax for types.
- [ESLint](https://eslint.org/) Find and fix problems in JavaScript and typescript code.
- [Prettier](https://prettier.io/) Code formatter.
- [husky](https://typicode.github.io/husky) Husky improves your commits.
- [materialUI](https://mui.com/) Move faster with intuitive React UI tools.
- [tailwindcss](https://tailwindcss.com/) A utility-first CSS framework.
- [apollo-client](https://www.apollographql.com/docs/react) Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- [Apollo-server](https://www.apollographql.com/docs/apollo-server) Apollo Server is a spec-compliant GraphQL server that's compatible with any GraphQL client.
- [codegen](https://the-guild.dev/graphql/codegen/) CodeGen is a family of open-source model for program synthesis.
- [Graphql](https://graphql.org/) A query language for an API.
- [Prisma](https://www.prisma.io/) Next-generation Node.js and TypeScript ORM.

## Getting starting

### Prerequisites

- `node`
- `npm`

### Dependencies

Install dependencies :

```sh
npm install
```

### Environment variables

Creates the .env file in the root directory of the api folder :

```sh
cd api && touch .env
```

In the .env, set the environment variables

Example :

```sh
DATABASE_URL=your-mongodb-url
TMDB_API_KEY=your-TMDB-api-key # Get your TMDb API key and paste here
NEXT_PUBLIC_API_URL="http://localhost:8080/api/graphql"
```

### Start the app in dev mode

Run your GraphQL server and your React app with this command :

```sh
npx prisma generate
npm run dev
```

Navigate to http://localhost:8080/graphql/api in your browser to explore the API with the Apollo Playground.

Navigate to http://localhost:8080 in your browser to run the React app.
