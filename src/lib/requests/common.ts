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
