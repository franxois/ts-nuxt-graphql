import * as express from 'express'
import nuxt from './nuxt'

const app = express()

app.set('port', process.env.PORT || 3015);

app.use(nuxt.render);

// Start express server
app.listen(app.get('port'), function () {
    console.log(`Express server listening on http://127.0.0.1:${app.get('port')}`);
});