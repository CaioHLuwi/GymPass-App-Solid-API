import { defineConfig, env } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
  migrations: {
    path: './prisma/migrations',
  },
})
