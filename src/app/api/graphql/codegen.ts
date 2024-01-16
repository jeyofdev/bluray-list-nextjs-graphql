import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: './src/app/api/graphql/schema',
	generates: {
		'./src/app/api/graphql/__generated__/resolvers-types.ts': {
			plugins: ['typescript', 'typescript-resolvers'],
			config: {
				useIndexSignature: true,
			},
		},
		'./src/app/api/graphql/graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
