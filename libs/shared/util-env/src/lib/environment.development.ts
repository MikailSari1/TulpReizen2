import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  dataApiUrl: 'http://localhost:3000/api',
  MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/TulpReizen',
}
