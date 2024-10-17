const corsAnywhere = require('cors-anywhere');

// Define the host and port where the proxy will run
const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'], // Optional: require origin and x-requested-with headers
  removeHeaders: ['cookie', 'cookie2'], // Optional: remove cookies from requests
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy running on ${host}:${port}`);
});
