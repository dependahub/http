
export class HttpResponse {
	status;
	statusText;
	data;

	constructor({status, statusText, data}) {
		this.status = status;
		this.statusText = statusText;
		this.data = data;
	}
}
