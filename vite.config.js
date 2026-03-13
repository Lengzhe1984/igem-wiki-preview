import { defineConfig } from 'vite'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repository?.endsWith('.github.io')

export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === 'true' && repository && !isUserSite
      ? `/${repository}/`
      : '/',
})
