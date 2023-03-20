
export const makePost = async function (url: string, dataToSend: unknown, token: string) {
	const res = await fetch(process.env.API_URL + url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Token ' + token
		},
		body: JSON.stringify(dataToSend)
	});

	return res;
};

export const makeSimplePost = async function (url: string, dataToSend: unknown) {
	const res = await fetch(process.env.API_URL + url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataToSend)
	});

	return res;
};

export const fetchData = async function (url: string, token: string) {
	const res = await fetch(process.env.API_URL + url, {
		headers: {
			Authorization: 'Token ' + token
		}
	});
	return res.json();
};

export const makeDelete = async function (url: string, token: string) {
	const res = await fetch(process.env.API_URL + url, {
		method: 'DELETE',
		headers: {
			Authorization: 'Token ' + token
		}
	});

	return res;
};
