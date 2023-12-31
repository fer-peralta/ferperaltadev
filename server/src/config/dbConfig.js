import { config } from './config.js'

export const dbOptions = {
  MongoDB: {
    url:
      (config.DB_SETUP == 'LOCAL' && config.DB_MONGO_LOCAL) ||
      (config.DB_SETUP == 'CLOUD' && config.DB_MONGO_CLOUD)
  }
}
