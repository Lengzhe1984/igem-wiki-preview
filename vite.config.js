import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repository?.endsWith('.github.io')
const htmlEntries = {
  main: resolve(__dirname, 'index.html'),
  'project-description': resolve(__dirname, 'project-description/index.html'),
  engineering: resolve(__dirname, 'engineering/index.html'),
  model: resolve(__dirname, 'model/index.html'),
  software: resolve(__dirname, 'software/index.html'),
  parts: resolve(__dirname, 'parts/index.html'),
  experiments: resolve(__dirname, 'experiments/index.html'),
  notebook: resolve(__dirname, 'notebook/index.html'),
  results: resolve(__dirname, 'results/index.html'),
  safety: resolve(__dirname, 'safety/index.html'),
  'human-practices': resolve(__dirname, 'human-practices/index.html'),
  education: resolve(__dirname, 'education/index.html'),
  contribution: resolve(__dirname, 'contribution/index.html'),
  'team-members': resolve(__dirname, 'team-members/index.html'),
  sponsors: resolve(__dirname, 'sponsors/index.html'),
  attributions: resolve(__dirname, 'attributions/index.html'),
  awards: resolve(__dirname, 'awards/index.html'),
}

export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === 'true' && repository && !isUserSite
      ? `/${repository}/`
      : '/',
  build: {
    rollupOptions: {
      input: htmlEntries,
    },
  },
})
