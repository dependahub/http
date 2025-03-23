
export function makeUrl({baseUrl, url, query}) {
	if (baseUrl.endsWith('/')) {
		baseUrl = baseUrl.slice(0, -1);
	}

	if (url.startsWith('/')) {
		url = url.slice(1);
	}

	let requestUrl;
	const isAbsoluteUrl = String(url).startsWith('http://') || String(url).startsWith('https://');
	requestUrl = isAbsoluteUrl ? url : `${baseUrl}/${url}`;

	const queryString = new URLSearchParams(query).toString();
	if (queryString) {
		requestUrl = `${requestUrl}?${queryString}`;
	}

	return requestUrl;
}
