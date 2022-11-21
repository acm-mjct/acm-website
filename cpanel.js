/* eslint-disable promise/prefer-await-to-callbacks */
/* eslint-disable no-console */
import { createServer } from 'node:http';
import { parse } from 'node:url';

import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3_000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		createServer(async (req, res) => {
			try {
				// Be sure to pass `true` as the second argument to `url.parse`.
				// This tells it to parse the query portion of the URL.
				const parsedUrl = parse(req.url, true);
				const { pathname, query } = parsedUrl;

				if (pathname === '/a') {
					await app.render(req, res, '/a', query);
				} else if (pathname === '/b') {
					await app.render(req, res, '/b', query);
				} else {
					await handle(req, res, parsedUrl);
				}
			} catch (error) {
				console.error('Error occurred handling', req.url, error);
				res.end('internal server error');
			}
		}).listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://${hostname}:${port}`);
		});
	})
	.catch((error) => {
		console.error('Error occurred preparing app', error);
	});
