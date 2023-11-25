import { CapacitorHttp } from '@capacitor/core';
/**
 * @param {import("undici-types").RequestInfo} url
 * @param {boolean} flagsAsDev
 */
async function get(url, flagsAsDev) {
	if (flagsAsDev) {
		const response = await fetch(url);
		return await response?.json();
	} else {
		const response = await CapacitorHttp.get({ url: String(url) });
		return await response?.data;
	}
}

/**
 * @param {import("undici-types").RequestInfo} url
 * @param {any} data
 * @param {boolean} flagsAsDev
 */
async function post(url, data, flagsAsDev) {
	if (flagsAsDev) {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data)
		});

		return await response.json();
	} else {
		const response = await CapacitorHttp.request({
			url: String(url),
			method: 'POST',
			data: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		});
		return await response?.data;
	}
}

/**
 * @param {number} duration
 */
function wait(duration) {
	return new Promise((resolve) => setTimeout(() => resolve('yes'), duration));
}
export { get, post, wait };
