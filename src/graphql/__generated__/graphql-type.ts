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

export type DeleteMovieMutationVariables = Exact<{
	movieId: Scalars['ID']['input'];
}>;

export type DeleteMovieMutation = {
	__typename?: 'Mutation';
	deleteMovie?: {
		__typename?: 'MovieResponse';
		id?: string | null;
		details?: {
			__typename?: 'MovieDetails';
			id?: number | null;
			title?: string | null;
			original_title?: string | null;
		} | null;
	} | null;
};

export type UpdateMovieMutationVariables = Exact<{
	movieId?: InputMaybe<Scalars['ID']['input']>;
	support?: InputMaybe<SupportInput>;
}>;

export type UpdateMovieMutation = {
	__typename?: 'Mutation';
	updateMovie?: {
		__typename?: 'MovieResponse';
		id?: string | null;
		details?: {
			__typename?: 'MovieDetails';
			id?: number | null;
			title?: string | null;
			original_title?: string | null;
		} | null;
	} | null;
};

export type AddSerieMutationVariables = Exact<{
	tmdbSerieId?: InputMaybe<Scalars['Int']['input']>;
	season?: InputMaybe<Scalars['Int']['input']>;
	support?: InputMaybe<SupportInput>;
}>;

export type AddSerieMutation = {
	__typename?: 'Mutation';
	addSerie?: {
		__typename?: 'SerieResponse';
		id?: string | null;
		season?: number | null;
		details?: {
			__typename?: 'SerieDetails';
			id?: number | null;
			name?: string | null;
			original_name?: string | null;
			seasons?: Array<{
				__typename?: 'Season';
				id?: number | null;
				name?: string | null;
				season_number?: number | null;
			} | null> | null;
		} | null;
		support?: {
			__typename?: 'Support';
			bluray?: boolean | null;
			bluray_hd?: boolean | null;
			dvd?: boolean | null;
		} | null;
	} | null;
};

export type DeleteSerieMutationVariables = Exact<{
	serieId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type DeleteSerieMutation = {
	__typename?: 'Mutation';
	deleteSerie?: {
		__typename?: 'SerieResponse';
		id?: string | null;
		season?: number | null;
		details?: {
			__typename?: 'SerieDetails';
			id?: number | null;
			name?: string | null;
			original_name?: string | null;
		} | null;
	} | null;
};

export type UpdateSerieMutationVariables = Exact<{
	serieId?: InputMaybe<Scalars['ID']['input']>;
	season?: InputMaybe<Scalars['Int']['input']>;
	support?: InputMaybe<SupportInput>;
}>;

export type UpdateSerieMutation = {
	__typename?: 'Mutation';
	updateSerie?: {
		__typename?: 'SerieResponse';
		id?: string | null;
		season?: number | null;
		details?: {
			__typename?: 'SerieDetails';
			id?: number | null;
			name?: string | null;
			original_name?: string | null;
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
			vote_average?: number | null;
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

export type MovieQueryVariables = Exact<{
	movieId: Scalars['ID']['input'];
}>;

export type MovieQuery = {
	__typename?: 'Query';
	movie?: {
		__typename?: 'MovieResponse';
		id?: string | null;
		details?: {
			__typename?: 'MovieDetails';
			id?: number | null;
			title?: string | null;
			original_title?: string | null;
			homepage?: string | null;
			overview?: string | null;
			backdrop_path?: string | null;
			poster_path?: string | null;
			original_language?: string | null;
			release_date?: string | null;
			vote_average?: number | null;
			genres?: Array<{
				__typename?: 'Genre';
				id?: number | null;
				name?: string | null;
			} | null> | null;
			production_countries?: Array<{
				__typename?: 'ProductionCountry';
				iso_3166_1?: string | null;
				name?: string | null;
			} | null> | null;
		} | null;
		support?: {
			__typename?: 'Support';
			dvd?: boolean | null;
			bluray_hd?: boolean | null;
			bluray?: boolean | null;
		} | null;
	} | null;
};

export type SearchSeriesQueryVariables = Exact<{
	searchOptions?: InputMaybe<SearchOptionsInput>;
}>;

export type SearchSeriesQuery = {
	__typename?: 'Query';
	searchSeries?: {
		__typename?: 'SearchSerieResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'SerieDetails';
			id?: number | null;
			name?: string | null;
			number_of_episodes?: number | null;
			original_name?: string | null;
			poster_path?: string | null;
			seasons?: Array<{
				__typename?: 'Season';
				air_date?: string | null;
				episode_count?: number | null;
				id?: number | null;
				name?: string | null;
				overview?: string | null;
				poster_path?: string | null;
				season_number?: number | null;
				vote_average?: number | null;
			} | null> | null;
		} | null>;
	} | null;
};

export type SeriesQueryVariables = Exact<{ [key: string]: never }>;

export type SeriesQuery = {
	__typename?: 'Query';
	series?: Array<{
		__typename?: 'SerieResponse';
		id?: string | null;
		season?: number | null;
		details?: {
			__typename?: 'SerieDetails';
			id?: number | null;
			name?: string | null;
			number_of_episodes?: number | null;
			original_name?: string | null;
			poster_path?: string | null;
			genres?: Array<{
				__typename?: 'Genre';
				id?: number | null;
				name?: string | null;
			} | null> | null;
			seasons?: Array<{
				__typename?: 'Season';
				id?: number | null;
				name?: string | null;
				poster_path?: string | null;
				season_number?: number | null;
				vote_average?: number | null;
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

export type SerieQueryVariables = Exact<{
	serieId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SerieQuery = {
	__typename?: 'Query';
	serie?: {
		__typename?: 'SerieResponse';
		id?: string | null;
		season?: number | null;
		details?: {
			__typename?: 'SerieDetails';
			id?: number | null;
			backdrop_path?: string | null;
			first_air_date?: string | null;
			homepage?: string | null;
			name?: string | null;
			number_of_episodes?: number | null;
			number_of_seasons?: number | null;
			original_language?: string | null;
			original_name?: string | null;
			overview?: string | null;
			poster_path?: string | null;
			vote_average?: number | null;
			genres?: Array<{
				__typename?: 'Genre';
				id?: number | null;
				name?: string | null;
			} | null> | null;
			production_countries?: Array<{
				__typename?: 'ProductionCountry';
				iso_3166_1?: string | null;
				name?: string | null;
			} | null> | null;
			seasons?: Array<{
				__typename?: 'Season';
				air_date?: string | null;
				episode_count?: number | null;
				id?: number | null;
				name?: string | null;
				overview?: string | null;
				poster_path?: string | null;
				season_number?: number | null;
				vote_average?: number | null;
			} | null> | null;
		} | null;
		support?: {
			__typename?: 'Support';
			bluray?: boolean | null;
			bluray_hd?: boolean | null;
			dvd?: boolean | null;
		} | null;
	} | null;
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
export const DeleteMovieDocument = gql`
	mutation DeleteMovie($movieId: ID!) {
		deleteMovie(movieId: $movieId) {
			id
			details {
				id
				title
				original_title
			}
		}
	}
`;
export type DeleteMovieMutationFn = Apollo.MutationFunction<
	DeleteMovieMutation,
	DeleteMovieMutationVariables
>;

/**
 * __useDeleteMovieMutation__
 *
 * To run a mutation, you first call `useDeleteMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieMutation, { data, loading, error }] = useDeleteMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useDeleteMovieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteMovieMutation,
		DeleteMovieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteMovieMutation, DeleteMovieMutationVariables>(
		DeleteMovieDocument,
		options,
	);
}
export type DeleteMovieMutationHookResult = ReturnType<
	typeof useDeleteMovieMutation
>;
export type DeleteMovieMutationResult =
	Apollo.MutationResult<DeleteMovieMutation>;
export type DeleteMovieMutationOptions = Apollo.BaseMutationOptions<
	DeleteMovieMutation,
	DeleteMovieMutationVariables
>;
export const UpdateMovieDocument = gql`
	mutation UpdateMovie($movieId: ID, $support: SupportInput) {
		updateMovie(movieId: $movieId, support: $support) {
			id
			details {
				id
				title
				original_title
			}
		}
	}
`;
export type UpdateMovieMutationFn = Apollo.MutationFunction<
	UpdateMovieMutation,
	UpdateMovieMutationVariables
>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      support: // value for 'support'
 *   },
 * });
 */
export function useUpdateMovieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		UpdateMovieMutation,
		UpdateMovieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateMovieMutation, UpdateMovieMutationVariables>(
		UpdateMovieDocument,
		options,
	);
}
export type UpdateMovieMutationHookResult = ReturnType<
	typeof useUpdateMovieMutation
>;
export type UpdateMovieMutationResult =
	Apollo.MutationResult<UpdateMovieMutation>;
export type UpdateMovieMutationOptions = Apollo.BaseMutationOptions<
	UpdateMovieMutation,
	UpdateMovieMutationVariables
>;
export const AddSerieDocument = gql`
	mutation AddSerie($tmdbSerieId: Int, $season: Int, $support: SupportInput) {
		addSerie(tmdbSerieId: $tmdbSerieId, season: $season, support: $support) {
			id
			season
			details {
				id
				name
				original_name
				seasons {
					id
					name
					season_number
				}
			}
			support {
				bluray
				bluray_hd
				dvd
			}
		}
	}
`;
export type AddSerieMutationFn = Apollo.MutationFunction<
	AddSerieMutation,
	AddSerieMutationVariables
>;

/**
 * __useAddSerieMutation__
 *
 * To run a mutation, you first call `useAddSerieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSerieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSerieMutation, { data, loading, error }] = useAddSerieMutation({
 *   variables: {
 *      tmdbSerieId: // value for 'tmdbSerieId'
 *      season: // value for 'season'
 *      support: // value for 'support'
 *   },
 * });
 */
export function useAddSerieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AddSerieMutation,
		AddSerieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddSerieMutation, AddSerieMutationVariables>(
		AddSerieDocument,
		options,
	);
}
export type AddSerieMutationHookResult = ReturnType<typeof useAddSerieMutation>;
export type AddSerieMutationResult = Apollo.MutationResult<AddSerieMutation>;
export type AddSerieMutationOptions = Apollo.BaseMutationOptions<
	AddSerieMutation,
	AddSerieMutationVariables
>;
export const DeleteSerieDocument = gql`
	mutation DeleteSerie($serieId: ID) {
		deleteSerie(serieId: $serieId) {
			id
			season
			details {
				id
				name
				original_name
			}
		}
	}
`;
export type DeleteSerieMutationFn = Apollo.MutationFunction<
	DeleteSerieMutation,
	DeleteSerieMutationVariables
>;

/**
 * __useDeleteSerieMutation__
 *
 * To run a mutation, you first call `useDeleteSerieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSerieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSerieMutation, { data, loading, error }] = useDeleteSerieMutation({
 *   variables: {
 *      serieId: // value for 'serieId'
 *   },
 * });
 */
export function useDeleteSerieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteSerieMutation,
		DeleteSerieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteSerieMutation, DeleteSerieMutationVariables>(
		DeleteSerieDocument,
		options,
	);
}
export type DeleteSerieMutationHookResult = ReturnType<
	typeof useDeleteSerieMutation
>;
export type DeleteSerieMutationResult =
	Apollo.MutationResult<DeleteSerieMutation>;
export type DeleteSerieMutationOptions = Apollo.BaseMutationOptions<
	DeleteSerieMutation,
	DeleteSerieMutationVariables
>;
export const UpdateSerieDocument = gql`
	mutation UpdateSerie($serieId: ID, $season: Int, $support: SupportInput) {
		updateSerie(serieId: $serieId, season: $season, support: $support) {
			id
			season
			details {
				id
				name
				original_name
			}
		}
	}
`;
export type UpdateSerieMutationFn = Apollo.MutationFunction<
	UpdateSerieMutation,
	UpdateSerieMutationVariables
>;

/**
 * __useUpdateSerieMutation__
 *
 * To run a mutation, you first call `useUpdateSerieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSerieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSerieMutation, { data, loading, error }] = useUpdateSerieMutation({
 *   variables: {
 *      serieId: // value for 'serieId'
 *      season: // value for 'season'
 *      support: // value for 'support'
 *   },
 * });
 */
export function useUpdateSerieMutation(
	baseOptions?: Apollo.MutationHookOptions<
		UpdateSerieMutation,
		UpdateSerieMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateSerieMutation, UpdateSerieMutationVariables>(
		UpdateSerieDocument,
		options,
	);
}
export type UpdateSerieMutationHookResult = ReturnType<
	typeof useUpdateSerieMutation
>;
export type UpdateSerieMutationResult =
	Apollo.MutationResult<UpdateSerieMutation>;
export type UpdateSerieMutationOptions = Apollo.BaseMutationOptions<
	UpdateSerieMutation,
	UpdateSerieMutationVariables
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
				vote_average
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
export const MovieDocument = gql`
	query Movie($movieId: ID!) {
		movie(movieId: $movieId) {
			id
			details {
				id
				title
				original_title
				homepage
				overview
				backdrop_path
				poster_path
				genres {
					id
					name
				}
				original_language
				release_date
				vote_average
				production_countries {
					iso_3166_1
					name
				}
			}
			support {
				dvd
				bluray_hd
				bluray
			}
		}
	}
`;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieQuery(
	baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MovieQuery, MovieQueryVariables>(
		MovieDocument,
		options,
	);
}
export function useMovieLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(
		MovieDocument,
		options,
	);
}
export function useMovieSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		MovieQuery,
		MovieQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<MovieQuery, MovieQueryVariables>(
		MovieDocument,
		options,
	);
}
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieSuspenseQueryHookResult = ReturnType<
	typeof useMovieSuspenseQuery
>;
export type MovieQueryResult = Apollo.QueryResult<
	MovieQuery,
	MovieQueryVariables
>;
export const SearchSeriesDocument = gql`
	query SearchSeries($searchOptions: SearchOptionsInput) {
		searchSeries(searchOptions: $searchOptions) {
			page
			total_pages
			total_results
			results {
				id
				name
				number_of_episodes
				original_name
				poster_path
				seasons {
					air_date
					episode_count
					id
					name
					overview
					poster_path
					season_number
					vote_average
				}
			}
		}
	}
`;

/**
 * __useSearchSeriesQuery__
 *
 * To run a query within a React component, call `useSearchSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSeriesQuery({
 *   variables: {
 *      searchOptions: // value for 'searchOptions'
 *   },
 * });
 */
export function useSearchSeriesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		SearchSeriesQuery,
		SearchSeriesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchSeriesQuery, SearchSeriesQueryVariables>(
		SearchSeriesDocument,
		options,
	);
}
export function useSearchSeriesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SearchSeriesQuery,
		SearchSeriesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchSeriesQuery, SearchSeriesQueryVariables>(
		SearchSeriesDocument,
		options,
	);
}
export function useSearchSeriesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		SearchSeriesQuery,
		SearchSeriesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SearchSeriesQuery, SearchSeriesQueryVariables>(
		SearchSeriesDocument,
		options,
	);
}
export type SearchSeriesQueryHookResult = ReturnType<
	typeof useSearchSeriesQuery
>;
export type SearchSeriesLazyQueryHookResult = ReturnType<
	typeof useSearchSeriesLazyQuery
>;
export type SearchSeriesSuspenseQueryHookResult = ReturnType<
	typeof useSearchSeriesSuspenseQuery
>;
export type SearchSeriesQueryResult = Apollo.QueryResult<
	SearchSeriesQuery,
	SearchSeriesQueryVariables
>;
export const SeriesDocument = gql`
	query Series {
		series {
			id
			season
			details {
				id
				genres {
					id
					name
				}
				name
				number_of_episodes
				original_name
				poster_path
				seasons {
					id
					name
					poster_path
					season_number
					vote_average
				}
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
 * __useSeriesQuery__
 *
 * To run a query within a React component, call `useSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeriesQuery(
	baseOptions?: Apollo.QueryHookOptions<SeriesQuery, SeriesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SeriesQuery, SeriesQueryVariables>(
		SeriesDocument,
		options,
	);
}
export function useSeriesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SeriesQuery, SeriesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SeriesQuery, SeriesQueryVariables>(
		SeriesDocument,
		options,
	);
}
export function useSeriesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		SeriesQuery,
		SeriesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SeriesQuery, SeriesQueryVariables>(
		SeriesDocument,
		options,
	);
}
export type SeriesQueryHookResult = ReturnType<typeof useSeriesQuery>;
export type SeriesLazyQueryHookResult = ReturnType<typeof useSeriesLazyQuery>;
export type SeriesSuspenseQueryHookResult = ReturnType<
	typeof useSeriesSuspenseQuery
>;
export type SeriesQueryResult = Apollo.QueryResult<
	SeriesQuery,
	SeriesQueryVariables
>;
export const SerieDocument = gql`
	query Serie($serieId: ID) {
		serie(serieId: $serieId) {
			id
			season
			details {
				id
				backdrop_path
				first_air_date
				genres {
					id
					name
				}
				homepage
				name
				number_of_episodes
				number_of_seasons
				original_language
				original_name
				overview
				poster_path
				production_countries {
					iso_3166_1
					name
				}
				seasons {
					air_date
					episode_count
					id
					name
					overview
					poster_path
					season_number
					vote_average
				}
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
 * __useSerieQuery__
 *
 * To run a query within a React component, call `useSerieQuery` and pass it any options that fit your needs.
 * When your component renders, `useSerieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSerieQuery({
 *   variables: {
 *      serieId: // value for 'serieId'
 *   },
 * });
 */
export function useSerieQuery(
	baseOptions?: Apollo.QueryHookOptions<SerieQuery, SerieQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SerieQuery, SerieQueryVariables>(
		SerieDocument,
		options,
	);
}
export function useSerieLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SerieQuery, SerieQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SerieQuery, SerieQueryVariables>(
		SerieDocument,
		options,
	);
}
export function useSerieSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<
		SerieQuery,
		SerieQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<SerieQuery, SerieQueryVariables>(
		SerieDocument,
		options,
	);
}
export type SerieQueryHookResult = ReturnType<typeof useSerieQuery>;
export type SerieLazyQueryHookResult = ReturnType<typeof useSerieLazyQuery>;
export type SerieSuspenseQueryHookResult = ReturnType<
	typeof useSerieSuspenseQuery
>;
export type SerieQueryResult = Apollo.QueryResult<
	SerieQuery,
	SerieQueryVariables
>;
