import "dotenv/config"

export const environment = {
  production: true,
  apiUrl: `http://${process.env["API_SERVER_HOST"]}:${process.env["API_SERVER_PORT"]}/api`
};
