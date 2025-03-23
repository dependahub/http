
export class HttpError extends Error {
	status;
	statusText;
	data;

	constructor(message, {status, statusText, data}) {
		super(message);
		this.name = 'HttpError';
		this.status = status;
		this.statusText = statusText;
		this.data = data;
	}
}
