import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
const defaultOptions = {} as const;
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
	searchMovies?: Maybe<SearchMovieResponse>;
	searchSeries?: Maybe<SearchSerieResponse>;
	serie?: Maybe<SerieResponse>;
	series?: Maybe<Array<Maybe<SerieResponse>>>;
};

export type QueryMovieArgs = {
	movieId?: InputMaybe<Scalars['ID']['input']>;
};

export type QuerySearchMoviesArgs = {
	searchOptions?: InputMaybe<SearchOptionsInput>;
};

export type QuerySearchSeriesArgs = {
	searchOptions?: InputMaybe<SearchOptionsInput>;
};

export type QuerySerieArgs = {
	serieId?: InputMaybe<Scalars['ID']['input']>;
};

export type SearchMovieResponse = {
	__typename?: 'SearchMovieResponse';
	page: Scalars['Int']['output'];
	results: Array<Maybe<MovieDetails>>;
	total_pages: Scalars['Int']['output'];
	total_results: Scalars['Int']['output'];
};

export type SearchOptionsInput = {
	page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
};

export type SearchSerieResponse = {
	__typename?: 'SearchSerieResponse';
	page: Scalars['Int']['output'];
	results: Array<Maybe<SerieDetails>>;
	total_pages: Scalars['Int']['output'];
	total_results: Scalars['Int']['output'];
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

export type AddMovieMutationVariables = Exact<{
	tmdbMovieId?: InputMaybe<Scalars['Int']['input']>;
	support?: InputMaybe<SupportInput>;
}>;

export type AddMovieMutation = {
	__typename?: 'Mutation';
	addMovie?: {
		__typename?: 'MovieResponse';
		id?: string | null;
		details?: {
			__typename?: 'MovieDetails';
			id?: number | null;
			original_title?: string | null;
			title?: string | null;
		} | null;
		support?: {
			__typename?: 'Support';
			bluray?: boolean | null;
			bluray_hd?: boolean | null;
			dvd?: boolean | null;
		} | null;
	} | null;
};

export type SearchMoviesQueryVariables = Exact<{
	searchOptions?: InputMaybe<SearchOptionsInput>;
}>;

export type SearchMoviesQuery = {
	__typename?: 'Query';
	searchMovies?: {
		__typename?: 'SearchMovieResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'MovieDetails';
			id?: number | null;
			title?: string | null;
			original_title?: string | null;
			poster_path?: string | null;
		} | null>;
	} | null;
};

export type MoviesQueryVariables = Exact<{ [key: string]: never }>;

export type MoviesQuery = {
	__typename?: 'Query';
	movies?: Array<{
		__typename?: 'MovieResponse';
		id?: string | null;
		details?: {
			__typename?: 'MovieDetails';
			id?: number | null;
			title?: string | null;
			original_title?: string | null;
			poster_path?: string | null;
			release_date?: string | null;
			vote_average?: number | null;
			genres?: Array<{
				__typename?: 'Genre';
				id?: number | null;
				name?: string | null;
			} | null> | null;
		} | null;
		support?: {
			__typename?: 'Support';
			bluray?: boolean | null;
			bluray_hd?: boolean | null;
			dvd?: boolean | null;
		} | null;
	} | null> | null;
};

export const AddMovieDocument = gql`
	mutation AddMovie($tmdbMovieId: Int, $support: SupportInput) {
		addMovie(tmdbMovieId: $tmdbMovieId, support: $support) {
			id
			details {
				id
				original_title
				title
			}
			support {
				bluray
				bluray_hd
				dvd
			}
		}
	}
`;
export type AddMovieMutationFn = Apollo.MutationFunction<
	AddMovieMutation,
	AddMovieMutationVariables
>;

/**
 * __useAddMovieMutation__
 *
 * To run a mutation, you first call `useAddMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovieMutation, { data, loading, error }] = useAddMovieMutation({
 *   variables: {
 *      tmdbMovieId: // value for 'tmdbMovieId'
 *      support: // value for 'support'
 *   },
 * });
 */
export function useAddMovieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AddMovieMutation,
		AddMovieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddMovieMutation, AddMovieMutationVariables>(
		AddMovieDocument,
		options,
	);
}
export type AddMovieMutationHookResult = ReturnType<typeof useAddMovieMutation>;
export type AddMovieMutationResult = Apollo.MutationResult<AddMovieMutation>;
export type AddMovieMutationOptions = Apollo.BaseMutationOptions<
	AddMovieMutation,
	AddMovieMutationVariables
>;
export const SearchMoviesDocument = gql`
	query SearchMovies($searchOptions: SearchOptionsInput) {
		searchMovies(searchOptions: $searchOptions) {
			page
			total_pages
			total_results
			results {
				id
				title
				original_title
				poster_path
			}
		}
	}
`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      searchOptions: // value for 'searchOptions'
 *   },
 * });
 */
export function useSearchMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		SearchMoviesQuery,
		SearchMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(
		SearchMoviesDocument,
		options,
	);
}
export function useSearchMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SearchMoviesQuery,
		SearchMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(
		SearchMoviesDocument,
		options,
	);
}
export function useSearchMoviesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		SearchMoviesQuery,
		SearchMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(
		SearchMoviesDocument,
		options,
	);
}
export type SearchMoviesQueryHookResult = ReturnType<
	typeof useSearchMoviesQuery
>;
export type SearchMoviesLazyQueryHookResult = ReturnType<
	typeof useSearchMoviesLazyQuery
>;
export type SearchMoviesSuspenseQueryHookResult = ReturnType<
	typeof useSearchMoviesSuspenseQuery
>;
export type SearchMoviesQueryResult = Apollo.QueryResult<
	SearchMoviesQuery,
	SearchMoviesQueryVariables
>;
export const MoviesDocument = gql`
	query Movies {
		movies {
			id
			details {
				id
				title
				original_title
				genres {
					id
					name
				}
				poster_path
				release_date
				vote_average
			}
			support {
				bluray
				bluray_hd
				dvd
			}
		}
	}
`;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(
		MoviesDocument,
		options,
	);
}
export function useMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(
		MoviesDocument,
		options,
	);
}
export function useMoviesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		MoviesQuery,
		MoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<MoviesQuery, MoviesQueryVariables>(
		MoviesDocument,
		options,
	);
}
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesSuspenseQueryHookResult = ReturnType<
	typeof useMoviesSuspenseQuery
>;
export type MoviesQueryResult = Apollo.QueryResult<
	MoviesQuery,
	MoviesQueryVariables
>;
