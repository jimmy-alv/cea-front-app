import { environment } from 'environments/environment'

export const apiUrl = 
  `${environment.api_server.protocol}://${environment.api_server.host}:${environment.api_server.port}/api`