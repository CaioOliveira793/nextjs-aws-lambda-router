var TRAILING_SLASH_REGEX = /^.+\/$/i;
var FILE_WITH_EXTENTION_REGEX = /^.*\/?\..+$/i;
var UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
var DYNAMIC_ROUTE_REGEX = /^.*\/[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}\/?$/i;
var UUID_CHAR_COUNT = 36;

function handler(event) {
	var request = event.request;
	var uri = request.uri;

	if (uri.length === 0 || uri === '/') {
		request.uri = '/index.html';
		return request;
	}

	if (uri.match(DYNAMIC_ROUTE_REGEX)) {
		request.uri = uri.endsWith('/') ?
			uri.slice(0, -UUID_CHAR_COUNT - 1) + '[id].html' :
			uri.slice(0, -UUID_CHAR_COUNT) + '[id].html';
		return request;
	}

	if (uri.match(TRAILING_SLASH_REGEX)) {
		request.uri += 'index.html';
		return request;
	}

	if (!uri.match(FILE_WITH_EXTENTION_REGEX)) {
		request.uri += '.html';
		return request;
	}

	return request;
}
