function parseFilesFromApi(filesFromApi) {
	return filesFromApi.map(file => {
		return {
			"name": "28939118_1550021315046973_819855323_o.jpg",
        "path": "/katalog1/28939118_1550021315046973_819855323_o.jpg",
        "is_dir": false,
        "owner": "mrowka",
        "size": 1326581,
        "creation_date": "2019-02-02T21:45:04.468966Z"
		};
	});
}

export default {
	parseUsersFromApi,
}
