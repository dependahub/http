import {makeUrl} from './utils/make-url.js';
import {makeResponse} from './utils/make-response.js';

class Http {
	defaults = {
		baseUrl: '',
		headers: {},
	};

	/**
	 * @param {string} url
	 * @param {object} options
	 * @param {object} options.query
	 * @param {object} options.headers
	 * @returns {Promise<HttpResponse>}
	 * @throws {HttpError}
	 */
	async get(url, options = {}) {
		const {baseUrl, headers: defaultHeaders = {}} = this.defaults;
		const {query = {}, headers: optionHeadrs = {}} = options || {};

		const requestUrl = makeUrl({
			baseUrl,
			url,
			query: query || {},
		});
		const headers = {
			...defaultHeaders,
			...optionHeadrs,
		};

		const fetchResponse = await fetch(requestUrl, {
			method: 'GET',
			headers,
		});

		return makeResponse(fetchResponse, headers);
	}

	/**
	 * @param {string} url
	 * @param {object} options
	 * @param {object} options.query
	 * @param {object} options.headers
	 * @param {object} options.body
	 * @returns {Promise<HttpResponse>}
	 * @throws {HttpError}
	 */
	async post(url, options = {}) {
		const {baseUrl, headers: defaultHeaders = {}} = this.defaults;
		const {query = {}, headers: optionHeadrs = {}, body} = options || {};

		const requestUrl = makeUrl({
			baseUrl,
			url,
			query: query || {},
		});
		const headers = {
			...defaultHeaders,
			...optionHeadrs,
		};

		const fetchResponse = await fetch(requestUrl, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		});

		return makeResponse(fetchResponse, headers);
	}

	/**
	 * @param {string} url
	 * @param {object} options
	 * @param {object} options.query
	 * @param {object} options.headers
	 * @param {object} options.body
	 * @returns {Promise<HttpResponse>}
	 * @throws {HttpError}
	 */
	async put(url, options = {}) {
		const {baseUrl, headers: defaultHeaders = {}} = this.defaults;
		const {query = {}, headers: optionHeadrs = {}, body} = options || {};

		const requestUrl = makeUrl({
			baseUrl,
			url,
			query: query || {},
		});
		const headers = {
			...defaultHeaders,
			...optionHeadrs,
		};

		const fetchResponse = await fetch(requestUrl, {
			method: 'PUT',
			headers,
			body: JSON.stringify(body),
		});

		return makeResponse(fetchResponse, headers);
	}

	/**
	 * @param {string} url
	 * @param {object} options
	 * @param {object} options.query
	 * @param {object} options.headers
	 * @returns {Promise<HttpResponse>}
	 * @throws {HttpError}
	 */
	async delete(url, options = {}) {
		const {baseUrl, headers: defaultHeaders = {}} = this.defaults;
		const {query = {}, headers: optionHeadrs = {}} = options || {};

		const requestUrl = makeUrl({
			baseUrl,
			url,
			query: query || {},
		});
		const headers = {
			...defaultHeaders,
			...optionHeadrs,
		};

		const fetchResponse = await fetch(requestUrl, {
			method: 'DELETE',
			headers,
		});

		return makeResponse(fetchResponse, headers);
	}
}

/**
 * HTTP通信モジュール
 * @type {Http}
 * @example
 * import {http} from '@dependahub/http';
 *
 * http.defaults.baseUrl = 'url';
 * http.defaults.headers = {};
 *
 * const reseponse = await http.get('url', {
 *   headers: {},
 *   query: {},
 * });
 *
 * const reseponse = await http.post('url', {
 *   headers: {},
 *   query: {},
 *   body: {},
 * });
 *
 * const reseponse = await http.put('url', {
 *   headers: {},
 *   query: {},
 *   body: {},
 * });
 *
 * const reseponse = await http.delete('url', {
 *   headers: {},
 *   query: {},
 * });
 *
 * const {status, data} = reseponse;
 */
export const http = new Http();
export default http;
