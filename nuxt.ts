import { Nuxt, Builder } from 'nuxt'

// Import and set Nuxt.js options
let config = require('./nuxt.config')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

// Give nuxt middleware to express
export default nuxt;