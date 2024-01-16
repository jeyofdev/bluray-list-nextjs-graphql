export const formatUrlQuery = (
	baseUrl: string,
	apiKey: string,
	pathParams?: string | number,
	queryString?: any,
) => {
	let url = `${baseUrl}`;
	url += pathParams ? `/${pathParams}` : '';
	url += `?api_key=${apiKey}&`;

	if (queryString) {
		const allQueryStrings = Object.entries(queryString)
			.filter(([_, value]) => value)
			.map(value => value.join('='));

		url += allQueryStrings.join('&');
	}

	return url;
};
