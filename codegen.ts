import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: './src/app/api/graphql/schema/index.ts',
	documents: 'src/graphql/**/*.{graphql,gql}',
	generates: {
		'./src/graphql/__generated__/graphql-type.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			config: {
				withHooks: true,
				withMutationFn: true,
				skipTypename: false,
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
