import {HttpResponse} from '../models/http-response.js';
import {HttpError} from '../errors.js';

export async function makeResponse(fetchResponse, headers = {}) {
	const {status, statusText} = fetchResponse;

	let data;
	switch (String(headers['Content-Type']).toLowerCase()) {
		case 'application/json': {
			data = await fetchResponse.json();
			break;
		}

		default: {
			data = await fetchResponse.text();
			break;
		}
	}

	if (!fetchResponse.ok) {
		throw new HttpError(statusText, {
			status,
			statusText,
			data,
		});
	}

	return new HttpResponse({
		status,
		statusText,
		data,
	});
}
