
import express from './service/express';
import {env,port,ip,apiRoot} from './config'
import router from './api';
const app = express(apiRoot,router)

app.listen(port, () => console.log('Server listening on http://%s:%d, in %s mode', ip, port, env))
