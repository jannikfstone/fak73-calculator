import { Hono } from 'hono'

const app = new Hono()

let calcValue = 0

app.get('/add', (c) => {
  const addValue =  +(c.req.query('y') || 0)
  calcValue += addValue
    return c.json({ value: calcValue })
})

app.get('/kill', (c) => {
    process.exit(0)
})

app.get('/stress', (c) => {
  while (true) {
    Math.sqrt(Math.random())
  }
})

export default app
