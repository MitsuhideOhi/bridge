import production from './config.production'
import development from './config.development'
const config = __DEV__ ? development : production
export default config
