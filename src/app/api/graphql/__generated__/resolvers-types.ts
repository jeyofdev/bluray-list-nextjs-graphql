import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Genre = {
	__typename?: 'Genre';
	id?: Maybe<Scalars['Int']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

export type MovieDetails = {
	__typename?: 'MovieDetails';
	backdrop_path?: Maybe<Scalars['String']['output']>;
	genres?: Maybe<Array<Maybe<Genre>>>;
	homepage?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	original_language?: Maybe<Scalars['String']['output']>;
	original_title?: Maybe<Scalars['String']['output']>;
	overview?: Maybe<Scalars['String']['output']>;
	poster_path?: Maybe<Scalars['String']['output']>;
	production_countries?: Maybe<Array<Maybe<ProductionCountry>>>;
	release_date?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	vote_average?: Maybe<Scalars['Float']['output']>;
};

export type MovieResponse = {
	__typename?: 'MovieResponse';
	details?: Maybe<MovieDetails>;
	id?: Maybe<Scalars['ID']['output']>;
	support?: Maybe<Support>;
};

export type Mutation = {
	__typename?: 'Mutation';
	addMovie?: Maybe<MovieResponse>;
	addSerie?: Maybe<SerieResponse>;
	deleteMovie?: Maybe<MovieResponse>;
	deleteSerie?: Maybe<SerieResponse>;
	updateMovie?: Maybe<MovieResponse>;
	updateSerie?: Maybe<SerieResponse>;
};

export type MutationAddMovieArgs = {
	support?: InputMaybe<SupportInput>;
	tmdbMovieId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationAddSerieArgs = {
	season?: InputMaybe<Scalars['Int']['input']>;
	support?: InputMaybe<SupportInput>;
	tmdbSerieId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteMovieArgs = {
	movieId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationDeleteSerieArgs = {
	serieId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateMovieArgs = {
	movieId?: InputMaybe<Scalars['ID']['input']>;
	support?: InputMaybe<SupportInput>;
};

export type MutationUpdateSerieArgs = {
	season?: InputMaybe<Scalars['Int']['input']>;
	serieId?: InputMaybe<Scalars['ID']['input']>;
	support?: InputMaybe<SupportInput>;
};

export type ProductionCountry = {
	__typename?: 'ProductionCountry';
	iso_3166_1?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
	__typename?: 'Query';
	movie?: Maybe<MovieResponse>;
	movies?: Maybe<Array<Maybe<MovieResponse>>>;
};

export type QueryMovieArgs = {
	movieId?: InputMaybe<Scalars['ID']['input']>;
};

export type Season = {
	__typename?: 'Season';
	air_date?: Maybe<Scalars['String']['output']>;
	episode_count?: Maybe<Scalars['Int']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	overview?: Maybe<Scalars['String']['output']>;
	poster_path?: Maybe<Scalars['String']['output']>;
	season_number?: Maybe<Scalars['Int']['output']>;
	vote_average?: Maybe<Scalars['Float']['output']>;
};

export type SerieDetails = {
	__typename?: 'SerieDetails';
	backdrop_path?: Maybe<Scalars['String']['output']>;
	first_air_date?: Maybe<Scalars['String']['output']>;
	genres?: Maybe<Array<Maybe<Genre>>>;
	homepage?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['Int']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	number_of_episodes?: Maybe<Scalars['Int']['output']>;
	number_of_seasons?: Maybe<Scalars['Int']['output']>;
	original_language?: Maybe<Scalars['String']['output']>;
	original_name?: Maybe<Scalars['String']['output']>;
	overview?: Maybe<Scalars['String']['output']>;
	poster_path?: Maybe<Scalars['String']['output']>;
	production_countries?: Maybe<Array<Maybe<ProductionCountry>>>;
	seasons?: Maybe<Array<Maybe<Season>>>;
	vote_average?: Maybe<Scalars['Float']['output']>;
};

export type SerieResponse = {
	__typename?: 'SerieResponse';
	details?: Maybe<SerieDetails>;
	id?: Maybe<Scalars['ID']['output']>;
	season?: Maybe<Scalars['Int']['output']>;
	support?: Maybe<Support>;
};

export type Support = {
	__typename?: 'Support';
	bluray?: Maybe<Scalars['Boolean']['output']>;
	bluray_hd?: Maybe<Scalars['Boolean']['output']>;
	dvd?: Maybe<Scalars['Boolean']['output']>;
};

export type SupportInput = {
	bluray?: InputMaybe<Scalars['Boolean']['input']>;
	bluray_hd?: InputMaybe<Scalars['Boolean']['input']>;
	dvd?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
	Float: ResolverTypeWrapper<Scalars['Float']['output']>;
	Genre: ResolverTypeWrapper<Genre>;
	ID: ResolverTypeWrapper<Scalars['ID']['output']>;
	Int: ResolverTypeWrapper<Scalars['Int']['output']>;
	MovieDetails: ResolverTypeWrapper<MovieDetails>;
	MovieResponse: ResolverTypeWrapper<MovieResponse>;
	Mutation: ResolverTypeWrapper<{}>;
	ProductionCountry: ResolverTypeWrapper<ProductionCountry>;
	Query: ResolverTypeWrapper<{}>;
	Season: ResolverTypeWrapper<Season>;
	SerieDetails: ResolverTypeWrapper<SerieDetails>;
	SerieResponse: ResolverTypeWrapper<SerieResponse>;
	String: ResolverTypeWrapper<Scalars['String']['output']>;
	Support: ResolverTypeWrapper<Support>;
	SupportInput: SupportInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	Boolean: Scalars['Boolean']['output'];
	Float: Scalars['Float']['output'];
	Genre: Genre;
	ID: Scalars['ID']['output'];
	Int: Scalars['Int']['output'];
	MovieDetails: MovieDetails;
	MovieResponse: MovieResponse;
	Mutation: {};
	ProductionCountry: ProductionCountry;
	Query: {};
	Season: Season;
	SerieDetails: SerieDetails;
	SerieResponse: SerieResponse;
	String: Scalars['String']['output'];
	Support: Support;
	SupportInput: SupportInput;
}>;

export type GenreResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['Genre'] = ResolversParentTypes['Genre'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieDetailsResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['MovieDetails'] = ResolversParentTypes['MovieDetails'],
> = ResolversObject<{
	backdrop_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	genres?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Genre']>>>,
		ParentType,
		ContextType
	>;
	homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	original_language?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	original_title?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	poster_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	production_countries?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['ProductionCountry']>>>,
		ParentType,
		ContextType
	>;
	release_date?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	vote_average?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResponseResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['MovieResponse'] = ResolversParentTypes['MovieResponse'],
> = ResolversObject<{
	details?: Resolver<
		Maybe<ResolversTypes['MovieDetails']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
	support?: Resolver<Maybe<ResolversTypes['Support']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
	addMovie?: Resolver<
		Maybe<ResolversTypes['MovieResponse']>,
		ParentType,
		ContextType,
		Partial<MutationAddMovieArgs>
	>;
	addSerie?: Resolver<
		Maybe<ResolversTypes['SerieResponse']>,
		ParentType,
		ContextType,
		Partial<MutationAddSerieArgs>
	>;
	deleteMovie?: Resolver<
		Maybe<ResolversTypes['MovieResponse']>,
		ParentType,
		ContextType,
		Partial<MutationDeleteMovieArgs>
	>;
	deleteSerie?: Resolver<
		Maybe<ResolversTypes['SerieResponse']>,
		ParentType,
		ContextType,
		Partial<MutationDeleteSerieArgs>
	>;
	updateMovie?: Resolver<
		Maybe<ResolversTypes['MovieResponse']>,
		ParentType,
		ContextType,
		Partial<MutationUpdateMovieArgs>
	>;
	updateSerie?: Resolver<
		Maybe<ResolversTypes['SerieResponse']>,
		ParentType,
		ContextType,
		Partial<MutationUpdateSerieArgs>
	>;
}>;

export type ProductionCountryResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['ProductionCountry'] = ResolversParentTypes['ProductionCountry'],
> = ResolversObject<{
	iso_3166_1?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
	movie?: Resolver<
		Maybe<ResolversTypes['MovieResponse']>,
		ParentType,
		ContextType,
		Partial<QueryMovieArgs>
	>;
	movies?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['MovieResponse']>>>,
		ParentType,
		ContextType
	>;
}>;

export type SeasonResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['Season'] = ResolversParentTypes['Season'],
> = ResolversObject<{
	air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	episode_count?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	poster_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	season_number?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	vote_average?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SerieDetailsResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['SerieDetails'] = ResolversParentTypes['SerieDetails'],
> = ResolversObject<{
	backdrop_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	first_air_date?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	genres?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Genre']>>>,
		ParentType,
		ContextType
	>;
	homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	number_of_episodes?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	number_of_seasons?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	original_language?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	original_name?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	poster_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	production_countries?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['ProductionCountry']>>>,
		ParentType,
		ContextType
	>;
	seasons?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Season']>>>,
		ParentType,
		ContextType
	>;
	vote_average?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SerieResponseResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['SerieResponse'] = ResolversParentTypes['SerieResponse'],
> = ResolversObject<{
	details?: Resolver<
		Maybe<ResolversTypes['SerieDetails']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
	season?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	support?: Resolver<Maybe<ResolversTypes['Support']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SupportResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes['Support'] = ResolversParentTypes['Support'],
> = ResolversObject<{
	bluray?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	bluray_hd?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>;
	dvd?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
	Genre?: GenreResolvers<ContextType>;
	MovieDetails?: MovieDetailsResolvers<ContextType>;
	MovieResponse?: MovieResponseResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	ProductionCountry?: ProductionCountryResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Season?: SeasonResolvers<ContextType>;
	SerieDetails?: SerieDetailsResolvers<ContextType>;
	SerieResponse?: SerieResponseResolvers<ContextType>;
	Support?: SupportResolvers<ContextType>;
}>;
