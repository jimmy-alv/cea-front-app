export const environment = {
  production: process.env["NODE_ENV"] == 'production' ? true : false,
  api_server: {
    host: process.env["API_SERVER_HOST"],
    port: process.env["API_SERVER_PORT"],
    protocol: process.env["API_SERVER_PROTOCOL"]
  }
}